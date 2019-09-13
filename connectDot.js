"use strict";
//game board  col and row
// let gameBoard = [];
const game_board = document.getElementById("game_board");

let gameboard = [
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0]
]

const drawBoard = function () {
    for (let i = 1; i <= gameboard.length; i++) {
        let gridDiv = document.createElement('div');
        gridDiv.className = "grid";
        gridDiv.id = "grid"
        game_board.appendChild(gridDiv);

        for (let j = 1; j <= gameboard.length; j++) {
            let gridDiv = document.createElement('div');
            gridDiv.className = "grid";
            gridDiv.id = "grid"
            game_board.appendChild(gridDiv);
        }
    }
}
drawBoard();






























// const grid_container = document.getElementById("grid-container");

// const createGrid = function (columns, rows) {
//     for (i = 1; i <= (columns * rows); i++) {
//         let gridDiv = document.createElement('div');
//         gridDiv.className = "grid";
//         gridDiv.id = "grid"
//         grid_container.appendChild(gridDiv);
//     }
// }
// createGrid(7, 6);