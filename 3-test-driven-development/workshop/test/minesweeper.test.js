const { Minesweeper } = require("../src/minesweeper");

const inputBord = [
    ["*", "*", ".", ".", "."],
    [".", ".", ".", ".", "."],
    [".", "*", ".", ".", "."]
];
const outputBord = [
    ["*", "*", "1", "0", "0"],
    ["3", "3", "2", "0", "0"],
    ["1", "*", "1", "0", "0"]
];

describe("Minesweeper", function() {
    it("should create square", function() {
        const square = new Minesweeper(4, 4);

        expect(square.m).toBe(4);
        expect(square.n).toBe(4);
    });

    it("should line and column of square must betwen (0 < n,m <= 100)", function() {
            const square = new Square(-2, 102);

            expect(square.m).toBe(0);
            expect(square.n).toBe(0);
        });

    it("should default values must be 4 4  ", function() {
        const square = new Square();

        expect(square.m).toBe(4);
        expect(square.n).toBe(4);
    });

});