const TicTacToe = require("./tictactoe.js")
const prompt = require('prompt-sync')();

// MAIN : PLAY THE GAME

marks = ["💛", "💙"]
size = 3 //will creat n*n matrix (board)

game = new TicTacToe(size, marks[0], marks[1])

while (!game.ended) {
    console.log(`\nFilling for ${game.currentMark}`)
    r = prompt("Row: ")
    c = prompt("Col: ")
    game.markBoard(r, c)
    console.log("\n", game)
}