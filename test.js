let gameBoard;
const huPlayer = '0';
const aiPlayer = 'X';

const cells = document.querySelectorAll('.disk');

function startGame() {
    document.querySelector(".endgame").style.display = "none";
    gameBoard = Array.from(Array(42).keys());
    console.log(gameBoard);
    for (let i = 0; i < cells.length; i++) {
        cells[i].innerHTML = '';
        cells[i].style.removeProperty('background');
        cells[i].addEventListener('click', turnClick, false);
    }

}
startGame(); //main start game function
function turnClick(square) {
    console.log(square.target.id);
    turn(square.target.id, huPlayer);
}

function turn(squareId, player) { // check who is playing and if the game is won or not
    gameBoard[squareId] = player;
    document.getElementById(squareId).innerText = player;
}


