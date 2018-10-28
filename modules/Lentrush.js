function getRandom(array){
    var y = array[Math.floor(Math.random() * array.length)];
    return y;
}
module.exports = class Lentrush {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 150;
        this.multiply = 3;
        this.index = index;
        this.gender = Math.round(Math.random());
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 2, this.y - 2],
            [this.x - 1, this.y - 2],
            [this.x, this.y - 2],
            [this.x + 1, this.y - 2],
            [this.x + 2, this.y - 2],
            [this.x - 2, this.y - 1],
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x + 2, this.y - 1],
            [this.x - 2, this.y],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x + 2, this.y],
            [this.x - 2, this.y + 1],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1],
            [this.x + 2, this.y + 1],
            [this.x - 2, this.y + 2],
            [this.x - 1, this.y + 2],
            [this.x, this.y + 2],
            [this.x + 1, this.y + 2],
            [this.x + 2, this.y + 2]
        ];
    }
    chooseCell(matrix, character1, character2, character3) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character1 || matrix[y][x] == character2 || matrix[y][x] == character3) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move(matrix) {
        var vandakdatark = this.chooseCell(matrix, 0, 1, 2);
        var patahakan = getRandom(vandakdatark);
        if (patahakan) {
            matrix[this.y][this.x] = 0;
            matrix[patahakan[1]][patahakan[0]] = 4;
            this.x = patahakan[0];
            this.y = patahakan[1];
            this.energy--;
        }
    }
    eat(gishatichArr, manArr, lentrushArr, matrix) {
        var vandakdatark = this.chooseCell(matrix, 3, 1);
        var patahakan = getRandom(vandakdatark);
        if (patahakan) {
            matrix[this.y][this.x] = 0;
            matrix[patahakan[1]][patahakan[0]] = 4;
            for (var i in gishatichArr) {
                if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                    gishatichArr.splice(i, 1);
                }
            }
            for (var i in manArr) {
                if (this.x == manArr[i].x && this.y == manArr[i].y) {
                    manArr.splice(i, 1);
                }
            }
            this.x = patahakan[0];
            this.y = patahakan[1];
            this.multiply++;
            this.energy++;
            if (this.energy <= 0) {
                this.die(lentrushArr, matrix);
            }
            if (this.multiply == 5) {
                this.searchMate(lentrushArr, matrix);
                this.multiply = 2;
            }
        }
        else {
            this.move(matrix);
        }
    }
    mul(lentrushArr, matrix) {
        var vandakdatark = this.chooseCell(matrix, 0);
        var patahakan = getRandom(vandakdatark);
        if (patahakan) {
            var x = patahakan[0];
            var y = patahakan[1];
            matrix[this.y][this.x] = this.index;
            var newLentrush = new Lentrush(x, y, 1);
            lentrushArr.push(newLentrush);

        }
    }
    searchMate(lentrushArr, matrix) {
        var otherClassCells = this.chooseCell(matrix, 4);

        for (var e in otherClassCells) {

            var x = otherClassCells[e].x;
            var y = otherClassCells[e].y;

            for (var i in lentrushArr) {
                if (lentrushArr[i].x == x && lentrushArr[i].y == y && this.gender != lentrushArr[i].gender) {
                    this.mul(lentrushArr, matrix);
                    return;
                }
            }
        }
    }
    die(lentrushArr, matrix) {
        for (var i in lentrushArr) {
            if (this.x == lentrushArr[i].x && this.y == lentrushArr[i].y) {
                lentrushArr.splice(i, 1);
            }
        }
        matrix[this.y][this.x] = 0;
    }
}