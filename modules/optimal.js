function randomMatrix(m, n) {
    var matrix = [];
    for (var y = 0; y < m; y++) {
        matrix[y] = []

        for (var x = 0; x < n; x++) {
            matrix[y][x] = Math.round(Math.random());
        }
    }
    matrix[31][40] = 2;
    matrix[32][40] = 2;
    matrix[32][40] = 2;
    matrix[33][40] = 2;
    matrix[34][40] = 2;
    matrix[35][40] = 2;
    matrix[36][40] = 2;
    matrix[37][40] = 2;
    matrix[38][40] = 2;
    matrix[39][40] = 2;
    matrix[40][40] = 2;
    matrix[41][40] = 2;
    matrix[42][40] = 2;
    matrix[43][40] = 2;
    matrix[44][40] = 2;
    matrix[45][40] = 2;
    matrix[46][40] = 2;
    matrix[47][40] = 2;

    matrix[36][50] = 3;
    matrix[37][50] = 3;
    matrix[38][50] = 3;
    matrix[39][50] = 3;
    matrix[40][50] = 3;
    matrix[41][50] = 3;
    matrix[42][50] = 3;
    matrix[43][50] = 3;
    matrix[44][50] = 3;
    matrix[45][50] = 3;
    matrix[46][50] = 3;
    matrix[47][50] = 3;
    matrix[48][50] = 3;
    matrix[49][50] = 3;
    matrix[50][50] = 3;
    matrix[51][50] = 3;
    matrix[52][50] = 3;
    matrix[53][50] = 3;

    
    matrix[50][60] = 10;
    matrix[51][60] = 10;
    matrix[52][60] = 10;
    matrix[53][60] = 10;
    matrix[54][60] = 10;
    matrix[55][60] = 10;
    matrix[56][60] = 10;
    matrix[57][60] = 10;
    matrix[58][60] = 10;
    matrix[59][60] = 10;
    matrix[60][60] = 10;
    matrix[61][60] = 10;
    matrix[62][60] = 10;
    matrix[63][60] = 10;
    matrix[64][60] = 10;
    matrix[65][60] = 10;
    matrix[66][60] = 10;
    matrix[67][60] = 10;


    matrix[60][80] = 4;
    matrix[61][80] = 4;
    matrix[62][80] = 4;
    matrix[63][80] = 4;
    matrix[64][80] = 4;
    matrix[65][80] = 4;
    matrix[66][80] = 4;
    matrix[67][80] = 4;
    matrix[68][80] = 4;
    matrix[69][80] = 4;
    matrix[70][80] = 4;
    matrix[71][80] = 4;
    matrix[72][80] = 4;
    matrix[73][80] = 4;
    matrix[74][80] = 4;
    matrix[75][80] = 4;
    matrix[76][80] = 4;
    matrix[77][80] = 4;
    return matrix;
}
var matrix = randomMatrix(100, 100);

module.exports = matrix;    