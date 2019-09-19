function insertTableRow(){
    for (let row = 0; row <= 5; row++) {
        document.writeln("<tr>");
        for (let col = 0; col <= 6; col++) {
            document.writeln("<td id='square_" + row + "_" + col + "' class='board_square'></td>");
        }
        document.writeln("</tr>");
    }
}
insertTableRow();


