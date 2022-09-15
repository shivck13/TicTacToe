A backend TicTacToe board of arbitrary size (square matrix) to keep track of the game which can either be used with NodeJS CLI or integrated with a webpage

### Example
```
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
```

### Features
This backend board can
* Handle boards of arbitrary size
* Custom marks (which can be different than actual marks on GUI)
* Override avoidance