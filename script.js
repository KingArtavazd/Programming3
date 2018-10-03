function getRandInt(min, max) {
    var z = Math.floor(Math.random() * (max - min) + min)
    return z;
}
function randomMatrix(m, n) {
    var matrix = [];
    for (var y = 0; y < m; y++) {
        matrix[y] = []

        for (var x = 0; x < n; x++) {
            matrix[y][x] = Math.round(Math.random());
        }
    }
    matrix[getRandInt(0, m)][getRandInt(0, n)] = 2;
    matrix[getRandInt(0, m)][getRandInt(0, n)] = 2;
    matrix[getRandInt(0, m)][getRandInt(0, n)] = 2;
    matrix[getRandInt(0, m)][getRandInt(0, n)] = 2;
    matrix[getRandInt(0, m)][getRandInt(0, n)] = 2;
    matrix[getRandInt(0, m)][getRandInt(0, n)] = 2;
    matrix[getRandInt(0, m)][getRandInt(0, n)] = 3;
    matrix[getRandInt(0, m)][getRandInt(0, n)] = 3;
    matrix[getRandInt(0, m)][getRandInt(0, n)] = 3;
    matrix[getRandInt(0, m)][getRandInt(0, n)] = 3;
    matrix[getRandInt(0, m)][getRandInt(0, n)] = 3;
    matrix[getRandInt(0, m)][getRandInt(0, n)] = 3;
    matrix[getRandInt(0, m)][getRandInt(0, n)] = 10;
    matrix[getRandInt(0, m)][getRandInt(0, n)] = 10;
    matrix[getRandInt(0, m)][getRandInt(0, n)] = 10;
    matrix[getRandInt(0, m)][getRandInt(0, n)] = 10;
    matrix[getRandInt(0, m)][getRandInt(0, n)] = 10;
    matrix[getRandInt(0, m)][getRandInt(0, n)] = 10;
    matrix[getRandInt(0, m)][getRandInt(0, n)] = 4;
    matrix[getRandInt(0, m)][getRandInt(0, n)] = 4;
    matrix[getRandInt(0, m)][getRandInt(0, n)] = 4;
    matrix[getRandInt(0, m)][getRandInt(0, n)] = 4;
    matrix[getRandInt(0, m)][getRandInt(0, n)] = 4;
    matrix[getRandInt(0, m)][getRandInt(0, n)] = 4;
    return matrix;
}
var grassArr = [];
var grasseaterArr = [];
var gishatichArr = [];
var manArr = [];
var lentrushArr = [];
var matrix = randomMatrix(100, 100);

var side = 10;

function setup() {
    frameRate(100);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background("#acacac");


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
}

function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                fill("green");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 3) {
                fill("orange");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 4) {
                fill("blue");
                rect(x * side, y * side, side, side);
            }
            else if (matrix[y][x] == 10) {
                fill("black");
                rect(x * side, y * side, side, side);
            }
            else {
                fill("#acacac");
                rect(x * side, y * side, side, side);
            }
        }

    }
    for (var i in grassArr) {
        grassArr[i].mul();
    }
    for (var i in grasseaterArr) {
        grasseaterArr[i].eat();
    }
    for (var i in gishatichArr) {
        gishatichArr[i].eat();
    }
    for (var i in manArr) {
        manArr[i].eat();
    }
    for (var i in lentrushArr) {
        lentrushArr[i].eat();
    }
}