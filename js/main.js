let gameboard = [];
let isPlaying = false;
let currentPlayer = 0;
let player_color = []; 
player_color[1] = "Matt";
player_color[2] = "Chok";
let diskCount = 0;



function startGame() {
    document.querySelector(".gameOver").style.display = "none";
    if (isPlaying == true){return false };
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