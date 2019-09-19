// // | 0,0 | 0,1 | 0,2 | 0,3 | 0,4 | 0,5 | 0,6 |
// // | 1,0 | 1,1 | 1,2 | 1,3 | 1,4 | 1,5 | 1,6 |
// // | 2,0 | 2,1 | 2,2 | 2,3 | 2,4 | 2,5 | 2,6 |
// // | 3,0 | 3,1 | 3,2 | 3,3 | 3,4 | 3,5 | 3,6 |
// // | 4,0 | 4,1 | 4,2 | 4,3 | 4,4 | 4,5 | 4,6 |
// // | 5,0 | 5,1 | 5,2 | 5,3 | 5,4 | 5,5 | 5,6 |

function checkForWin() {
    //check horizontal
    for (i = 1; i < 3; i++) {
        for (col = 0; col < 4; col++) {
            for (row = 0; row < 6; row++) {
                if (gameboard[row][col] == i) {
                    if ((gameboard[row][col + 1] == i) && (gameboard[row][col + 2] == i) && (gameboard[row][col + 3] == i)) {
                        endGame(i);
                        return true; //game is over.
                    }
                }
            }
        }
    }

    //check verticle
    for (i = 1; i <= 2; i++) {

        for (col = 0; col < 7; col++) {
            for (row = 0; row < 3; row++) {
                if (gameboard[row][col] == i) {
                    if ((gameboard[row + 1][col] == i) && (gameboard[row + 2][col] == i) && (gameboard[row + 3][col] == i)) {
                        endGame(i);
                        return true;
                    }
                }
            }
        }
    }
//check diagnol down
    for (i = 1; i <= 2; i++) {
        for (col = 0; col < 4; col++) {
            for (row = 0; row < 3; row++) {
                if (gameboard[row][col] == i) {
                    if ((gameboard[row + 1][col + 1] == i) && (gameboard[row + 2][col + 2] == i) && (gameboard[row + 3][col + 3] == i)) {
                        endGame(i);
                        return true;
                    }
                }
            }
        }
    }
    //check diagnol up
    for (i = 1; i <= 2; i++) {
        for (col = 0; col <= 3; col++) {
            for (row = 3; row <= 5; row++) {
                if (gameboard[row][col] == i) {
                    if ((gameboard[row - 1][col + 1] == i) && (gameboard[row - 2][col + 2] == i) && (gameboard[row - 3][col + 3] == i)) {
                        endGame(i);
                        return true;
                    }
                }
            }
        }
    }

}