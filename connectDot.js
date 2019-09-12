const grid_container = document.getElementById("grid-container");

const createGrid = function(columns, rows){
    for(i = 1; i <=(columns * rows); i++){
        let gridDiv = document.createElement('div');
        gridDiv.className = "grid";
        // let node= document.createTextNode(columns, rows);
        // gridDiv.appendChild(node);
        grid_container.appendChild(gridDiv);
    }
}
createGrid(7, 6);

