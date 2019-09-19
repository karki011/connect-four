
let game_active = false; 
let active_player = 0; // the # of the active player - 1 or 2.  Default is 0, meaning no active player
let gameboard = []; 
let player_color = []; //
player_color[1] = "red"; 
player_color[2] = "black"; 


function beginGame() {
    document.querySelector(".endgame").style.display = "none";
    // reset the game until the last one is done.  
    if (game_active == true) return false; 
    game_active = true;  //We're starting the game, so make game_active = true
    /* Reset the gameboard to be all 0.  We are going to use a multi-dimensional array - so every
    */
    for (row=0; row<=5; row++) {
        gameboard[row] = [];
        for (col=0; col<=6; col++) {
            gameboard[row][col] = 0;
        }	
    }		
    drawBoard(); // 	
    active_player = 1; //will set the first player as their turn
    setUpTurn(); //ready for the player's turn
}


function endGame(winningPlayer) {
    document.querySelector(".endgame").style.display = "block";
    game_active = false; 
    document.getElementById('text').innerHTML = "Winner: Player " + winningPlayer; 
}

		
