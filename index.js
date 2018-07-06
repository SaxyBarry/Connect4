let board = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

var currentPlayer = "Black";
var nextPlayer = "Red";
var playerBlackSelections = new Array();
var playerRedSelections = new Array()
//Places Checkers Based on Current Player's Color
handleClick = function (event) {

    var cell = event.target.id;
    var cellElement = document.getElementById(cell);
    cell.innerHTML = currentPlayer;
    console.log(cell);
    console.log(currentPlayer);
    let column = cell[10];
    let value = lowestVal(cell);
    cell = ("row-" + value + " col-" + column);
    // console.log(cell+" New")
    cellElement = document.getElementById(cell);
    //Keeps player from overriding placement 
    if (cellElement.className === "black") {
        alert("Invalid Placement");
        return
    } else if (cellElement.className === "red") {
        alert("Invalid Placement");
        return
    }

    if (currentPlayer === "Black") {
        board[value][column] = "black"
        console.log("kjhkhj" + board[value][column])
        cellElement.className = "black";
        board[value][column] = "black";
        nextPlayer = "Red";

    } else {
        board[value][column] = "red"
        console.log("kjhkhj" + board[value][column])
        cellElement.className = "red";
        board[value][column] = "red"
        nextPlayer = "Black";
    }
    console.log(board)
    currentPlayer = nextPlayer;
}
var cells = document.querySelectorAll("td");
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick)
}

// function resetGame() {
//     playerBlackSelections = new Array();
//     playerRedSelections = new Array();
//     for (var i = 0; i < cells.length; i++) {
//         cells[i].innerHTML = ""
//     }
// }
function lowestVal(cell, column) {
    for (i = 5; i >= 0; i--) {
        let column = cell[10];
        if (board[i][column] === 0) {
            return (i);
        }
    }
}
function checkWin(){
    var cell = document.getElementById(cell);
    let column = cell[10];
    let value = lowestVal(cell);
        const edgeX = board[0].length - 2;
    if (cells === board[value][ column + 1] && cell === board[value][column + 3]) {
        for (let x = 0; x < edgeX; x++) {alert(currentPlayer)}
       
    };
}