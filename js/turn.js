function setUpTurn() {
    if (game_active) { //only run this is the game is active.
        let game_info = document.getElementById('game_info');
        game_info.innerHTML = "Current Player: Player " + active_player +  " <span class='player"+active_player+"'></span>";
    }
    
}	