const { Minesweeper } = require("../src/minesweeper");


describe("Minesweeper", function() {
    it("should create Minesweeper", function() {
        const board = new Minesweeper(15, 15);

        expect(board.x).toBe(15);
        expect(board.y).toBe(15);
    });

    it("should line and column of square must betwen (0 < n,m <= 100)", function() {
        const board = new Minesweeper(-2, 102);

        expect(board.x).toBe(0);
        expect(board.y).toBe(0);
    });

    it("should return 4 4 as default value", function() {
        const board = new Minesweeper();

        expect(board.x).toBe(4);
        expect(board.y).toBe(4);
    });

    it("should find nb mines in the bord  ", function() {
        const bord = new Minesweeper();
        let nbMines = bord.generateNewBoardAndgetNumberOfMines();
        console.log(nbMines);

        expect(nbMines).toBe(3);

    });

});