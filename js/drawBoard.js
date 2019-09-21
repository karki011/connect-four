// | 0,0 | 0,1 | 0,2 | 0,3 | 0,4 | 0,5 | 0,6 |
// | 1,0 | 1,1 | 1,2 | 1,3 | 1,4 | 1,5 | 1,6 |
// | 2,0 | 2,1 | 2,2 | 2,3 | 2,4 | 2,5 | 2,6 |
// | 3,0 | 3,1 | 3,2 | 3,3 | 3,4 | 3,5 | 3,6 |
// | 4,0 | 4,1 | 4,2 | 4,3 | 4,4 | 4,5 | 4,6 |
// | 5,0 | 5,1 | 5,2 | 5,3 | 5,4 | 5,5 | 5,6 |

function drawBoard() {
    // console.log("finish drawBoard(). ");
    let drop =document.querySelector('.drop');
     //check to see if any player has won.
    if(checkForWin()){
        drop.removeEventListener('click', drop, false)
    }

    for (col = 0; col<=6; col++) {
        for (row=0; row<=5; row++) {
            //Set the inner HTML of the square (a td) to be a span with the class of 'piece' and 'player' + the value of that 
            let draw =document.getElementById('square_'+row+'_'+col);
            draw.innerHTML ="<span class='piece player"+gameboard[row][col]+"'> </span>";
        }	
    }
    
}
