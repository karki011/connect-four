
let currentPlayer = "red";
let playerRedSelections = [];
let playerBlackSelections = [];

function handleClick (e) {
    const cell = e.target;
    console.log(cell);

    cell.innerHTML = currentPlayer;
    if (currentPlayer === "red") {
        playerSelections = playerRedSelections;
        nextPlayer = "black";
    } else {
        playerSelections = playerBlackSelections;
        playerBlackSelections.className = "black";

        nextPlayer = "red";
    }
    playerSelections.push(Number(cell.id));
    currentPlayer = nextPlayer;
};
const cells = document.querySelectorAll("td");

for (let i = 0; i < cells.length; i++) {    
    cells[i].addEventListener("click", handleClick);
}