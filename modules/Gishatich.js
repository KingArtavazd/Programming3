class Gishatich {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 40;
        this.multiply = 0;
        this.index = index;
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
    chooseCell(character1, character2) {
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
    move() {
        var vandakdatark = this.chooseCell(0, 1);
        var patahakan = random(vandakdatark);
        if (patahakan) {
            matrix[this.y][this.x] = 0;
            matrix[patahakan[1]][patahakan[0]] = 3;
            this.x = patahakan[0];
            this.y = patahakan[1];
            this.energy--;
            if (this.energy == 0) {
                this.die();
            }
        }
    }
    eat() {
        var vandakdatark = this.chooseCell(2);
        var patahakan = random(vandakdatark);
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
                this.mul();
                this.multiply = 0;
            }
            if (this.energy == 0) {
                this.die();
            }
        }
        else {
            this.move();
        }
    }
    mul() {
        var vandakdatark = this.chooseCell(0);
        var patahakan = random(vandakdatark);
        if (patahakan) {
            matrix[this.y][this.x] = 3;
            matrix[patahakan[1]][patahakan[0]] = 3;
            var newGishatich = new Gishatich(patahakan[0], patahakan[1], this.index);
            gishatichArr.push(newGishatich);

        }
    }
    die() {
        for (var i in gishatichArr) {
            if (this.x == gishatichArr[i].x && this.y == gishatichArr[i].y) {
                gishatichArr.splice(i, 1);
            }
        }
                matrix[this.y][this.x] = 0;
    }
}