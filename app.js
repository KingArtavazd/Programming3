var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io') (server);

var matrix = require('./modules/optimal');
var grass = require('./modules/Grass');
var grasseater = require('./modules/GrassEater');
var gishatich = require('./modules/Gishatich');
var man = require('./modules/Man');
var lentrush = require('./modules/Lentrush');

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('public/index.html');
});
server.listen(3000);

var frameCount = 5;

var drawTime = 1000/frameCount;

io.on('connection', function(socket){
  socket.emit( 'matrix', matrix);

  

  var inter = setInterval( function(){
    socket.emit('redraw', matrix);
  }, drawTime);
});