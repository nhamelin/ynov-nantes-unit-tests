class Minesweeper {
    row = 0;
    column = 0;

    constructor(x, y) {
        if (x < 0 || y < 0) {
            this.x = 0;
            this.y = 0;
        } else if (x > 100 || y > 100) {
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

    generateNewBoardAndgetNumberOfMines() {
        let numberOfMines = 3;
        let board = [];
        this.row = 3;
        this.column = 5;
        for (let i = 0; i < this.row; i++) {
            board[i] = [];
            for (let j = 0; j < this.column; j++) {
                board[i][j] = 0;
            }
        }

        // Generate random mine placement
        for (let i = 0; i < numberOfMines; i++) {
            let hauteur = Math.floor(Math.random() * this.row);
            let largeur = Math.floor(Math.random() * this.column);
            // If no mine at indices, place mine
            if (board[hauteur][largeur] === 0) {
                board[hauteur][largeur] = "*";
            } else {
                i--;
            }
        }
        //Generate proximity numbers
        let nb = 0;
        for (let i = 0; i < this.row; i++) {
            for (let j = 0; j < this.column; j++) {
                if (board[i][j] != 0) {
                    nb++;
                }
            }
        }

        return nb;
    }

}
module.exports = {
    Minesweeper
}