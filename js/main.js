let gameboard = [];
let game_active = false;
let active_player = 0;
let player_color = []; 
player_color[1] = "Matt";
player_color[2] = "Chok";
let diskCount = 0;




function startGame() {
    document.querySelector(".endgame").style.display = "none";

    if (game_active == true) return false;

    game_active = true;

    for (row = 0; row <= 5; row++) {
        gameboard[row] = [];
        for (col = 0; col <= 6; col++) {
            gameboard[row][col] = 0;
        }
    }
    drawBoard();
    active_player = 1;
    setUpTurn();
}


function endGame(winningPlayer) {
    // console.log("Inside endGame function().");
    document.querySelector(".endgame").style.display = "block";
    document.getElementById('text').innerHTML = "Winner:  " + winningPlayer;
    document.getElementById('text').innerHTML = 
    "Winner:  "+ 
    winningPlayer + "</br>"+
    "<button id='reset' onClick='document.location.reload(true)'>Play again</button>";
    game_active = false;
    console.log("diskcount" +diskCount);
    document.getElementById('drop').removeAttribute("onclick");

    

}