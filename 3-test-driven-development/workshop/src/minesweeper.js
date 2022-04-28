class Minesweeper {

    constructor(m, n) {
        if (m < 0 || m > 100 || n < 0 || n > 100) {
            this.m = 0;
            this.n = 0;
        } else if (m != null || n != null) {
            this.m = m;
            this.n = n;
        } else {
            this.m = 4;
            this.n = 4;
        }
    }
}
module.exports = {
    Minesweeper
}