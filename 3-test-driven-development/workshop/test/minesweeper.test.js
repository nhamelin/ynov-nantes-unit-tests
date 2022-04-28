const { Square } = require("../src/minesweeper");


describe("Minesweeper", function() {
    it("should create square", function() {
        const square = new Square(4, 4);
        expect(square.m).toBe(4);
        expect(square.n).toBe(4);


    });

});