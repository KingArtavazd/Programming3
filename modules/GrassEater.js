module.exports = class GrassEater {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 0;
        this.multiply = 0;
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
    chooseCell(character) {
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    move() {
        var vandakdatark = this.chooseCell(0);
        var patahakan = random(vandakdatark);
        if (patahakan) {
            matrix[this.y][this.x] = 0;
            matrix[patahakan[1]][patahakan[0]] = 2;
            this.x = patahakan[0];
            this.y = patahakan[1];
            this.energy--;
            if (this.energy <= 0) {
                this.die();
            }
        }
    }
    eat() {
        var vandakdatark = this.chooseCell(1);
        var patahakan = random(vandakdatark);
        if (patahakan) {
            matrix[this.y][this.x] = 0;
            matrix[patahakan[1]][patahakan[0]] = 2;
            for (var i in grassArr) {
                if (patahakan[0] == grassArr[i].x && patahakan[1] == grassArr[i].y) {
                    grassArr.splice(i, 1);
                    break;
                }
            }

            this.x = patahakan[0];
            this.y = patahakan[1];
            this.multiply++;
            this.energy++;
            if (this.multiply==3) {
                this.searchMate();
                this.multiply=0;
            }
            if (this.energy==0){
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
            var newGrassEater = new GrassEater(patahakan[0], patahakan[1], this.index);
            grasseaterArr.push(newGrassEater);
            matrix[this.y][this.x] = 2;
            matrix[patahakan[1]][patahakan[0]] = 2;
        }
    }
    searchMate() {
        var otherClassCells = this.chooseCell(2);

        for(var e in otherClassCells){

            var x = otherClassCells[e].x;
            var y = otherClassCells[e].y;

            for(var i in grasseaterArr){
                if(grasseaterArr[i].x == x && grasseaterArr[i].y == y && this.gender != grasseaterArr[i].gender){
                    this.mul();
                    return;
                }
            }
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (var i in grasseaterArr) {
            if (this.x == grasseaterArr[i].x && this.y == grasseaterArr[i].y) {
                grasseaterArr.splice(i, 1);
            }
        }
    }
}