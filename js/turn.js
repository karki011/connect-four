function turnInfo() {
    if (isPlaying) { 
        let game_score = document.getElementById('game_score');
        game_score.innerHTML = "Playing " + player_color[currentPlayer] +  " <span id='display' class='player"+currentPlayer+"'>" +"_" + "</span>";   
    }
}	