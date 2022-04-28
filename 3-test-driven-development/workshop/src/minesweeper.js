class Square {

    constructor(m, n) {
        if (m < 0 || m > 100 || n < 0 || n > 100) {
            this.m = 0;
            this.n = 0;
        } else if (m < 0 && m > 100 && n >= 0 && n <= 100) {
            this.m = 0;
            this.n = n;
        } else if (n < 0 && n > 100 && m >= 0 && m <= 100) {
            this.m = m;
            this.n = 0
        } else {
            this.m = m;
            this.n = n;
        }
    }
}
module.exports = {
    Square
}