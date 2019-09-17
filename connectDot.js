"use strict";

//TODO Display a red or black disc.
//TODO Stack red and black discs in a column using a flex box layout.
//TODO Display a full board consisting of 7 columns.
//TODO Set a click handler function for each column that adds an additional disc.
//TODO Take turns! Toggle the color of each successive disc added.
//TODO Keep track of what color disc is at each position in the board. You should be able to console.log() debugging output after each move showing the state of the board.
//TODO Once a column is full (has 6 discs), don't allow any more discs to be added.
//TODO Check whether the last disc added completed a four-in-a-row within the column (vertically).
//TODO Check whether the last disc added completed four-in-a-row horizontally.
//TODO Check whether the last disc added completed four-in-a-row on either an upward- or downward-sloping diagonal.
const game_board = document.getElementById("game_board");
let disc_color = [];
disc_color[1] = "red";
disc_color[2] = "black";
let active_player = 0;
let gameBoard = [
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0]
];

function addDiscToBoard(currentPlayer, board, selectedColoumn) {
    return
}

function displayBoard(board) {
    for (let i = 0; i < board.length; i++) {
        for (let j = 1; j < board.length; j++) {
            let gridDiv = document.createElement('div');
            gridDiv.className = "grid";
            gridDiv.id = i+"_"+ (j-i);
            gridDiv.setAttribute("data-col",j);
            game_board.appendChild(gridDiv);
        }
    }
}

function checkGameCondition(board) {
    //ending condition: win{who} ,tie, ""
    return
}
function endGameshowMessage(who){

}
function togglePlayer(active_player) {
    return newActive_player
}

function coloumnClickHandler(event) {
    //figure out what colounm was clicked
    let clickedColumn;
    gameBoard = addDiscToBoard(active_player,gameBoard,clickedColumn);
    displayBoard(gameBoard);
    let condition = checkGameCondition(gameBoard);
    if(condition!== ""){
       endGameshowMessage(who); 
    }else{
        active_player = togglePlayer(active_player);
    }
}
game_board.addEventListener('click', function(e){
    console.log(e.target.id);
    
})
function startGame() {
    active_player = 1;
    displayBoard(gameBoard);

}
startGame();