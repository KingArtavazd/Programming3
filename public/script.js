var side = 10;
var socket;
var matrix;
var statistika;
var margin = 50;

function setup() {
    frameRate(0);
    socket = io.connect();

    socket.on('matrix', function (mtx) {
        background("#acacac");
        matrix = mtx;
        createCanvas(matrix[0].length * side + 700, matrix.length * side);
        noLoop();
        redraw();

        socket.on('redraw', function (mtx) {
            matrix = mtx;
            redraw();
            // console.log("tick");
        });
        socket.on('Text', function (Statistika) {
            statistika = Statistika;
      });
    });

 
}

function draw() {
    background("#acacac");
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
    for(var i in statistika){
        fill(0, 0, 0);
        textSize(20);
        text(i + ":"+ " "+ statistika[i], 1020, margin)
        margin+=40;
    }
    margin = 40;

}
