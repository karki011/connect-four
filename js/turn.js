function turnInfo() {
    if (isPlaying) { //only run this is the game is active.
        let game_score = document.getElementById('game_score');
        game_score.innerHTML = "Current Player: Player " + player_color[currentPlayer] +  " <span id='display' class='player"+currentPlayer+"'>" +"_" + "</span>";
        
    }
    
}	