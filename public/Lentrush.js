class Lentrush {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 40;
        this.multiply = 0;

        this.index = index;
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
    chooseCell(character1, character2, character3) {
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
    move() {
        var vandakdatark = this.chooseCell(0,1,2);
        var patahakan = random(vandakdatark);
        if (patahakan) {
            matrix[this.y][this.x] = 0;
            matrix[patahakan[1]][patahakan[0]] = 4;
            this.x = patahakan[0];
            this.y = patahakan[1];
            this.energy--;
        }
    }
    eat() {
        var vandakdatark = this.chooseCell(3,10);
        var patahakan = random(vandakdatark);
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
            if (this.energy == 0) {
                this.die();
            }
            if (this.multiply == 7) {
                this.mul();
                this.multiply = 0;
            }
        }
        else {
            this.move();
        }
    }
    mul() {
        var vandakdatark = this.chooseCell(0);
        var patahakan = random(vandakdatark);
        if (patahakan){
                var x = patahakan[0];
                var y = patahakan[1];
                matrix[this.y][this.x] = this.index;
                var newLentrush = new  Lentrush(x, y, 1);
                lentrushArr.push(newLentrush);
                var newGrassEater = new GrassEater(x, y, 1);
                grasseaterArr.push(newGrassEater);

        }
    }
    die() {
        for (var i in lentrushArr) {
            if (this.x == lentrushArr[i].x && this.y == lentrushArr[i].y) {
                lentrushArr.splice(i, 1);
            }
        }
        matrix[this.y][this.x] = 0;
    }
}