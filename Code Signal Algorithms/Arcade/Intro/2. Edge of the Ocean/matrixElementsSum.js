function matrixElementsSum(matrix) {
    var total = 0
    for(let i = 0; i<matrix[0].length; i++){
        for(let j = 0; j<matrix.length; j++){
            if(matrix[j][i] == 0){
                break
            }
            total += matrix[j][i]
        }
    }
    return total
}

var matrix1 = [[0,1,1,2], 
              [0,5,0,0], 
              [2,0,3,3]]
var matrix2 = [[1,1,1], 
               [2,2,2], 
               [3,3,3]]
var matrix3 = [[1,1,1,0], 
               [0,5,0,1], 
               [2,1,3,10]]

console.log(matrixElementsSum(matrix1)) //9
console.log(matrixElementsSum(matrix2)) //18
console.log(matrixElementsSum(matrix3)) //9