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
    matrix[40][40] = 3;
    matrix[41][40] = 3;
    matrix[42][40] = 3;
    matrix[43][40] = 3;
    matrix[44][40] = 3;
    matrix[45][40] = 3;
    matrix[50][50] = 10;
    matrix[51][50] = 10;
    matrix[52][50] = 10;
    matrix[53][50] = 10;
    matrix[54][50] = 10;
    matrix[55][50] = 10;
    matrix[60][60] = 4;
    matrix[61][60] = 4;
    matrix[62][60] = 4;
    matrix[63][60] = 4;
    matrix[64][60] = 4;
    matrix[65][60] = 4;
    return matrix;
}
var matrix = randomMatrix(75, 75);

module.exports = matrix;    