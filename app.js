var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require('fs');

var grassArr = [];
var grasseaterArr = [];
var gishatichArr = [];
var manArr = [];
var lentrushArr = [];

var matrix = require('./modules/optimal');
var Grass = require('./modules/Grass');
var GrassEater = require('./modules/GrassEater');
var Gishatich = require('./modules/Gishatich');
var Man = require('./modules/Man');
var Lentrush = require('./modules/Lentrush');

app.use(express.static("."));

for (var y = 0; y < matrix.length; ++y) {
  for (var x = 0; x < matrix[y].length; ++x) {
    if (matrix[y][x] == 1) {
      var gr = new Grass(x, y, 1);
      grassArr.push(gr);
    }
    else if (matrix[y][x] == 2) {
      var kt = new GrassEater(x, y, 2)
      grasseaterArr.push(kt);
    }
    else if (matrix[y][x] == 3) {
      var am = new Gishatich(x, y, 3);
      gishatichArr.push(am);
    } else if (matrix[y][x] == 4) {
      var an = new Lentrush(x, y, 4);
      lentrushArr.push(an);
    }
    else if (matrix[y][x] == 10) {
      var pc = new Man(x, y, 10);
      manArr.push(pc);
    }
  }
}

app.get('/', function (req, res) {
  res.redirect('public/index.html');
});

server.listen(3000);


var Statistika =
{
  "Grass": grassArr.length,
  "GrassEater": grasseaterArr.length,
  "Gishatich": gishatichArr.length,
  "Man": manArr.length,
  "Lentrush": lentrushArr.length
};

function main() {
  var JSO = JSON.stringify(Statistika);
  fs.writeFileSync("obj.json", JSO);
}
main();

var frameRate = 5;
var frameCount = 0;

var drawTime = 1000 / frameRate;

io.on('connection', function (socket) {
  socket.emit('matrix', matrix);

  var inter = setInterval(function () {
    socket.emit("Text", Statistika);

    frameCount++;

    for (var i in grassArr) {
      grassArr[i].mul(grassArr, matrix);
    }
    for (var i in grasseaterArr) {
      grasseaterArr[i].eat(grassArr, grasseaterArr, matrix);
    }
    for (var i in gishatichArr) {
      gishatichArr[i].eat(grasseaterArr, gishatichArr, matrix);
    }
    for (var i in manArr) {
      manArr[i].eat(grasseaterArr, manArr, matrix);
    }
    for (var i in lentrushArr) {
      lentrushArr[i].eat(gishatichArr, manArr, lentrushArr, matrix);
    }
    socket.emit('redraw', matrix);

    if (frameCount >= 60) {
      Statistika = {
        "Grass": grassArr.length,
        "GrassEater": grasseaterArr.length,
        "Gishatich": gishatichArr.length,
        "Man": manArr.length,
        "Lentrush": lentrushArr.length
      };

      socket.emit("Text", Statistika);

      frameCount = 0;
    }
  }, drawTime);
});