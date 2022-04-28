class Minesweeper {

    constructor(x, y) {
        if (x < 0 || y < 0) {
            this.x = 0;
            this.y = 0;
        } else if(m > 100 || n > 100) {
            this.x = 100;
            this.y = 100;
        } else if (x != null || y != null) {
            this.x = x;
            this.y = y;
        } else {
            this.x = 4;
            this.y = 4;
        }
    }

}
module.exports = {
    Minesweeper
}