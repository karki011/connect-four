
function drop(col) {
    for (row=5; row>=0; row--) {
        console.log("dropping disc");
        if (gameboard[row][col] == 0) {
            gameboard[row][col] = active_player;
            drawBoard();
            if (active_player == 1) {
                active_player = 2;
            } else {
                active_player = 1;
            } 
            setUpTurn();
            return true;
        } 
    }
   

}
