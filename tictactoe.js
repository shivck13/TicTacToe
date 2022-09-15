class TicTacToe {
    constructor(size, mark1, mark2) {
        this.size = size
        this.board = []
        this.marks = [mark1, mark2]
        this.markCount = {}
        this.currentMark = this.marks[0]
        this.ended = false
        this.winner = null
        this.match = {}
      
        // initialisation
        this.createBoard()
        this.markCount[this.marks[0]] = 0
        this.markCount[this.marks[1]] = 0
    }
  
    createBoard() {
        for (var r = 0; r < this.size; r++) {
            var tmp = Array()
            for (var c = 0; c < this.size; c++) {
                tmp.push(null)
            }
            this.board.push(tmp)
        }
    }
  
    markBoard(r, c) {
        if (!this.ended && r < this.size && c < this.size && this.board[r][c] == null) {
            this.board[r][c] = this.currentMark
            this.markCount[this.currentMark]++
            this.currentMark = this.currentMark == this.marks[0] ? this.marks[1] : this.marks[0]
            this.checkMatch()
        } else {
            //skip refill
            console.log("⚠️ Skipped marking! Try again!")
        }
    }
  
    checkMatch() {
        // not enough marks
        if (this.markCount[this.marks[0]] >= this.size || this.markCount[this.marks[1]] >= this.size) {
            // check all columns
            for (var c = 0; c < this.size; c++) {
                if (this.columnMatch(c)) {
                    this.winner = this.board[0][c]
                    this.match = {
                        "column": c
                    }
                    this.ended = true
                }
            }
          
            // check all rows
            for (var r = 0; r < this.size; r++) {
                if (this.rowMatch(r)) {
                    this.winner = this.board[r][0]
                    this.match = {
                        "row": r
                    }
                    this.ended = true
                }
            }
          
            // check first \ diagonal
            if (this.firstDiagonalMatch()) {
                this.winner = this.board[0][0]
                this.match = {
                    "diagonal": 0
                }
                this.ended = true
            }
          
            // check second / diagonal
            if (this.secondDiagonalMatch()) {
                this.winner = this.board[0][this.size - 1]
                this.match = {
                    "diagonal": 1
                }
                this.ended = true
            }
          
            // it's a draw
            if (this.markCount[this.marks[0]] + this.markCount[this.marks[1]] == this.size * this.size) {
                this.ended = true
            }
        }
    }
  
    columnMatch(c) {
        var firstMark = this.board[0][c]
        if (firstMark == null) return false
        for (var r = 1; r < this.size; r++) {
            if (this.board[r][c] != firstMark) return false
        }
        return true
    }
  
    rowMatch(r) {
        var firstMark = this.board[r][0]
        if (firstMark == null) return false
        for (var c = 1; c < this.size; c++) {
            if (this.board[r][c] != firstMark) return false
        }
        return true
    }
  
    firstDiagonalMatch() {
        var firstMark = this.board[0][0]
        if (firstMark == null) return false
        for (var r = 1, c = 1; r < this.size; r++, c++) {
            if (this.board[r][c] != firstMark) return false
        }
        return true
    }
  
    secondDiagonalMatch() {
        var firstMark = this.board[0][this.size - 1]
        if (firstMark == null) return false
        for (var r = 0, c = this.size - 1; r < this.size; r++, c--) {
            if (this.board[r][c] != firstMark) return false
        }
        return true
    }
}

module.exports = TicTacToe