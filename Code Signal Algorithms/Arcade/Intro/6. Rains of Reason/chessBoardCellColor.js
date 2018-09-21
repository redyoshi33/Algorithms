function chessBoardCellColor(cell1, cell2) {
    let color1 = (cell1.charCodeAt(0)+parseInt(cell1[1]))%2==0 
    let color2 = (cell2.charCodeAt(0)+parseInt(cell2[1]))%2==0
    return color1 == color2
}

cell1 = "A1"
cell2 = "C3"
cell3 = "B3"
cell4 = "H8"

console.log(chessBoardCellColor(cell1, cell2)) //true
console.log(chessBoardCellColor(cell3, cell4)) //false