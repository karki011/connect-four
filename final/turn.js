function setUpTurn() {
    if (game_active) { //only run this is the game is active.
        document.getElementById('game_info').innerHTML = "Current Player: Player " + active_player +  " <span class='player"+active_player+"'></span>";
    }
}	