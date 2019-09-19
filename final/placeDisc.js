
function drop(col) {
    for (row=5; row>=0; row--) { // start from the bottom looking for an open slot
        if (gameboard[row][col] == 0) {//is default, so no players owns it
            gameboard[row][col] = active_player;
            drawBoard(); 
            if (active_player == 1) {
                active_player = 2;
            } else {
                active_player = 1;
            }
            setUpTurn(); //display who is the active player
            return true;
        }
    }
}
