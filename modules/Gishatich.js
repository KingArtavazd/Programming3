function getRandom(array){
    var y = array[Math.floor(Math.random() * array.length)];
    return y;
}
module.exports = class Gishatich {
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
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(matrix, character1, character2) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character1 || matrix[y][x] == character2) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move(matrix) {
        var vandakdatark = this.chooseCell(matrix, 1,0);
        var patahakan = getRandom(vandakdatark);
        if (patahakan) {
            matrix[this.y][this.x] = 0;
            matrix[patahakan[1]][patahakan[0]] = 3;
            this.x = patahakan[0];
            this.y = patahakan[1];
            this.energy--;
        }
    }
    eat(grasseaterArr, gishatichArr, matrix) {
        var vandakdatark = this.chooseCell(matrix, 2);
        var patahakan = getRandom(vandakdatark);
        if (patahakan) {
            matrix[patahakan[1]][patahakan[0]] = 3;
            matrix[this.y][this.x] = 0;
            this.x = patahakan[0];
            this.y = patahakan[1];
            for (var i in grasseaterArr) {
                if (patahakan[0] == grasseaterArr[i].x && patahakan[1] == grasseaterArr[i].y) {
                    grasseaterArr.splice(i, 1);
                    break;
                }
            }
            this.multiply++;
            this.energy++;
            if (this.multiply == 5) {
                this.searchMate(gishatichArr, matrix);
                this.multiply = 3;
            }
            if (this.energy == 0) {
                this.die(gishatichArr, matrix);
            }
        }
        else {
            this.move(matrix);
        }
    }
    mul(gishatichArr, matrix) {
        var vandakdatark = this.chooseCell(matrix, 0);
        var patahakan = getRandom(vandakdatark);
        if (patahakan) {
            matrix[this.y][this.x] = 3;
            matrix[patahakan[1]][patahakan[0]] = 3;
            var newGishatich = new Gishatich(patahakan[0], patahakan[1], this.index);
            gishatichArr.push(newGishatich);

        }
    }
    searchMate(gishatichArr, matrix) {
        var otherClassCells = this.chooseCell(matrix, 3);

        for (var e in otherClassCells) {

            var x = otherClassCells[e].x;
            var y = otherClassCells[e].y;

            for (var i in gishatichArr) {
                if (gishatichArr[i].x == x && [i].y == y && this.gender != gishatichArr[i].gender) {
                    this.mul(gishatichArr, matrix);
                    return;
                }
            }
        }
    }
    die(gishatichArr, matrix) {
        for (var i in gishatichArr) {
            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                gishatichArr.splice(i, 1);
            }
        }
        matrix[this.y][this.x] = 0;
    }
}