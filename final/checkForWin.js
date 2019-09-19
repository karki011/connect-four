// | 0,0 | 0,1 | 0,2 | 0,3 | 0,4 | 0,5 | 0,6 |
// | 1,0 | 1,1 | 1,2 | 1,3 | 1,4 | 1,5 | 1,6 |
// | 2,0 | 2,1 | 2,2 | 2,3 | 2,4 | 2,5 | 2,6 |
// | 3,0 | 3,1 | 3,2 | 3,3 | 3,4 | 3,5 | 3,6 |
// | 4,0 | 4,1 | 4,2 | 4,3 | 4,4 | 4,5 | 4,6 |
// | 5,0 | 5,1 | 5,2 | 5,3 | 5,4 | 5,5 | 5,6 |

function checkForWin() {
    console.log("runing checkforwin()");
    
    //check left-to-right
    for (i=1; i<=2; i++) {//this will check for each player
       
        for (col = 0; col <=3; col++) {//row must be 4 long
            for (row = 0; row <=5; row++) {
                //check to see if the gameboard item is set to the player we are checking, if so, lets check the next 3 for a match
                if (gameboard[row][col] == i) {
                    if ((gameboard[row][col+1] == i) && (gameboard[row][col+2] == i) && (gameboard[row][col+3] == i)) {
                        endGame(i);
                        return true; //game is over.
                    }
                }
            }
        }
    }
    
    //check top-to-bottom
    for (i=1; i<=2; i++) {
        //since a winning row must be 4 long, we only need to check the first 3 rows, 0,1,and 2
        for (col = 0; col <=6; col++) {
            for (row = 0; row <=2; row++) {
                //check to see if the gameboard item is set to the player we are checking, if so, lets check the next 3 for a match
                if (gameboard[row][col] == i) {
                    if ((gameboard[row+1][col] == i) && (gameboard[row+2][col] == i) && (gameboard[row+3][col] == i)) {
                        endGame(i); //a match has been made - run endGame for the player who had the match.
                        return true; //stop checking for a win - the game is over.
                    }
                }
            }
        }
    }
    
    
}
