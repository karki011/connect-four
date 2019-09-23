function setUpTurn() {
    if (game_active) { //only run this is the game is active.
        let game_score = document.getElementById('game_score');
        game_score.innerHTML = "Current Player: Player " + player_color[active_player] +  " <span id='display' class='player"+active_player+"'>" +"_" + "</span>";
        
    }
    
}	