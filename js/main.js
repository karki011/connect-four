let gameboard = [];
let isPlaying = false;
let currentPlayer = 0;
let player_color = []; 
player_color[1] = "Matt";
player_color[2] = "Chok";
let diskCount = 0;

// | 0,0 | 0,1 | 0,2 | 0,3 | 0,4 | 0,5 | 0,6 |
// | 1,0 | 1,1 | 1,2 | 1,3 | 1,4 | 1,5 | 1,6 |
// | 2,0 | 2,1 | 2,2 | 2,3 | 2,4 | 2,5 | 2,6 |
// | 3,0 | 3,1 | 3,2 | 3,3 | 3,4 | 3,5 | 3,6 |
// | 4,0 | 4,1 | 4,2 | 4,3 | 4,4 | 4,5 | 4,6 |
// | 5,0 | 5,1 | 5,2 | 5,3 | 5,4 | 5,5 | 5,6 |


function startGame() {
    document.querySelector(".gameOver").style.display = "none";
    if (isPlaying === true){return false };
    isPlaying = true;
    for (let row = 0; row <= 5; row++) {
        gameboard[row] = [];
        for (let col = 0; col <= 6; col++) {
            gameboard[row][col] = 0;
        }
    }
    gameBoard();
    currentPlayer = 1;
    turnInfo();
}


function gameOver(winningPlayer) {
    // console.log("Inside gameOver function().");
    document.querySelector(".gameOver").style.display = "block";
    document.getElementById('text').innerHTML = "Winner:  " + winningPlayer;
    document.getElementById('text').innerHTML = 
    "Winner:  "+ 
    winningPlayer + "</br>"+
    "<button id='reset' onClick='document.location.reload(true)'>Play again</button>";
    isPlaying = false;
    console.log("diskcount" +diskCount);
    document.getElementById('placeDisc').removeAttribute("onclick");
}