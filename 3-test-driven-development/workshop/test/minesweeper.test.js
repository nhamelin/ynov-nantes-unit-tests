const { Square } = require("../src/minesweeper");


describe("Minesweeper", function() {
    it("should create square", function() {
        const square = new Square(4, 4);
        console.log(square.m, square.n);
        expect(square.m).toBe(4);
        expect(square.n).toBe(4);


    });

    it("should line and column of square must betwen (0 < n,m <= 100)", function() {
        const square = new Square(-2, 102);
        console.log(square.m, square.n)
        expect(square.m).toBe(0);
        expect(square.n).toBe(0);
    });

});