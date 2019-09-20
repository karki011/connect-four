function setUpTurn() {
    if (game_active) { //only run this is the game is active.
        let game_info = document.getElementById('game_info');
        game_info.innerHTML = "Current Player: Player " + player_color[active_player] +  " <span id='display' class='player"+active_player+"'>" +"_" + "</span>";
        
    }
    
}	