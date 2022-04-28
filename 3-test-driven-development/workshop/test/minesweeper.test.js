const { Minesweeper } = require("../src/minesweeper");

const inputBoard = [
    ["*", "*", ".", ".", "."],
    [".", ".", ".", ".", "."],
    [".", "*", ".", ".", "."]
];
const outputBoard = [
    ["*", "*", "1", "0", "0"],
    ["3", "3", "2", "0", "0"],
    ["1", "*", "1", "0", "0"]
];

describe("Minesweeper", function() {
    it("should create square", function() {
        const board = new Minesweeper(4, 4);

        expect(board.x).toBe(4);
        expect(board.y).toBe(4);
    });

    it("should line and column of square must betwen (0 < n,m <= 100)", function() {
            const board = new Minesweeper(-2, 102);

            expect(board.m).toBe(0);
            expect(board.n).toBe(0);
        });

    it("should default values must be 4 4  ", function() {
        const board = new Minesweeper();

        expect(board.m).toBe(4);
        expect(board.n).toBe(4);
    });

});