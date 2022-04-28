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
    it("should create Minesweeper", function() {
        const board = new Minesweeper(15, 15);

        expect(board.x).toBe(15);
        expect(board.y).toBe(15);
    });

    it("should line and column of square must betwen (0 < n,m <= 100)", function() {
            const board = new Minesweeper(-2, 102);

            expect(board.x).toBe(0);
            expect(board.y).toBe(100);
        });

    it("should return 4 4 as default value", function() {
        const board = new Minesweeper();

        expect(board.x).toBe(4);
        expect(board.y).toBe(4);
    });

});