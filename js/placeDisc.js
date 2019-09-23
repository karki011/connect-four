
function placeDisc(col) {
    for (row=5; row>=0; row--) {
        // console.log("placeDiscping disc");
        if (gameboard[row][col] == 0) {
            gameboard[row][col] = currentPlayer;
            gameBoard();
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
