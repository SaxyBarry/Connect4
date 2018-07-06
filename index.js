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
    cell = ("row-"+value+" col-"+column);
    // console.log(cell+" New")
    cellElement = document.getElementById(cell);
    //Keeps player from overriding placement 
    if (cellElement.className === "black") {
        alert("Invalid Placement");
        return
    }
    else if (cellElement.className === "red") {
        alert("Invalid Placement");
        return
    }

    if (currentPlayer === "Black") {
        board[value][column]= "black"
        console.log("kjhkhj"+board[value][column])
        cellElement.className = "black";
        nextPlayer = "Red";
    
    } else {
        board[value][column]= "red"
        console.log("kjhkhj"+board[value][column])
        cellElement.className = "red";
        nextPlayer = "Black";
    }
    // var cell = event.target
    // let checkWhowon = checkWinner();
    // if (checkWhowon == true) {
    //     alert("Player " + currentPlayer + " Won!")
    //     console.log("h");
    //     resetGame();
    // }
    // if (checkDraw()) {
    //     alert("Draw!");
    //     resetGame();
    // }
    currentPlayer = nextPlayer;
}
var cells = document.querySelectorAll("td");
for (var i = 0; i < cells.length; i++) {
    cells[i].addEventListener('click', handleClick)
}

// function checkDraw() {
//     return playerRedSelections.length + playerBlackSelections.length >= cells.length
// }

// function checkWinner() {
//     for (let combo of winningCombinations) {
//         let matches = 0
//         console.log(combo);
//         for (let items of playerSelections) {
//             if (combo.includes(items)) {
//                 matches++;
//                 console.log(matches);
//             }
//         }
//         if (matches == 4) {
//             return (true);
//         }
//     }
//     return (false);
// }

// function resetGame() {
//     playerBlackSelections = new Array();
//     playerRedSelections = new Array();
//     for (var i = 0; i < cells.length; i++) {
//         cells[i].innerHTML = ""
//     }
// }
function lowestVal(cell,column) {
    for (i = 0; i <= 6; i++) {
        let column = cell[10];
        if (board[i][column] === 0 && i != 5) {} else {
            return (i)
        }
    // if(board[i][column])
    }
}