
function drop(col) {
    for (row=5; row>=0; row--) {
        // console.log("dropping disc");
        if (gameboard[row][col] == 0) {
            gameboard[row][col] = currentPlayer;
            drawBoard();
            if (currentPlayer == 1) {
                currentPlayer = 2;
            } else {
                currentPlayer = 1;
            } 
            turnInfo();
            return true;
        } 
        diskCount++;
    }
    
}
