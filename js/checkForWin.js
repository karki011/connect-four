

function checkForWin() {
    for (i = 1; i < 3; i++) {
        for (col = 0; col < 4; col++) {
            for (row = 0; row < 6; row++) {
                if (gameboard[row][col] === i) {
                    if ((gameboard[row][col + 1] === i) && (gameboard[row][col + 2] === i) && (gameboard[row][col + 3] === i)) {
                        gameOver(" <span id='display' class='player" + currentPlayer + "'>" + "_" + "</span>");
                        return true; //game is over.
                    }
                }
            }
        }
        for (col = 0; col < 7; col++) {
            for (row = 0; row < 3; row++) {
                if (gameboard[row][col] === i) {
                    if ((gameboard[row + 1][col] === i) && (gameboard[row + 2][col] === i) && (gameboard[row + 3][col] === i)) {
                        gameOver(" <span id='display' class='player" + currentPlayer + "'>" + "_" + "</span>");
                        return true;
                    }
                }
            }
        }
        for (col = 0; col < 4; col++) {
            for (row = 0; row < 3; row++) {
                if (gameboard[row][col] === i) {
                    if ((gameboard[row + 1][col + 1] === i) && (gameboard[row + 2][col + 2] === i) && (gameboard[row + 3][col + 3] === i)) {
                        gameOver(" <span id='display' class='player" + currentPlayer + "'>" + "_" + "</span>");
                        return true;
                    }
                }
            }
        }
        for (col = 0; col <= 3; col++) {
            for (row = 3; row <= 5; row++) {
                if (gameboard[row][col] === i) {
                    if ((gameboard[row - 1][col + 1] === i) && (gameboard[row - 2][col + 2] === i) && (gameboard[row - 3][col + 3] === i)) {
                        gameOver(" <span id='display' class='player" + currentPlayer + "'>" + "_" + "</span>");
                        return true;
                    }
                }
            }
        }
    }

    //tie check
    if (diskCount ==== 105) {
        console.log("tie");
        document.querySelector(".gameOver").style.display = "block";
        document.getElementById('text').innerHTML =
            "Its a tie game!" + "</br>" +
            "<button id='reset' onClick='document.location.reload(true)'>Play again</button>";
        isPlaying = false;
        document.getElementById('placeDisc').removeAttribute("onclick");
    }
}

// win condition reference
// https://stackoverflow.com/questions/33181356/connect-four-game-checking-for-wins-js