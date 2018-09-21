function minesweeper(matrix) {
    let mine = []
    for(let i = 0; i<matrix.length; i++){
        let temp = []
        for(let j =0; j<matrix[i].length; j++){
            temp.push(check(matrix, i, j))
        }
        mine.push(temp)
    }
    return mine
}
function check(matrix, i, j){
    let count = 0
    if(matrix[i-1] != undefined){
        if(matrix[i-1][j-1] === true){
            count++
        }
    }
    if(matrix[i-1] != undefined){
        if(matrix[i-1][j] === true){
            count++
        }
    }
    if(matrix[i-1] != undefined){
        if(matrix[i-1][j+1] === true){
            count++
        }
    }
    if(matrix[i][j-1]===true){
        count++
    }
    if(matrix[i][j+1]===true){
        count++
    }
    if(matrix[i+1] != undefined){
        if(matrix[i+1][j-1] === true){
            count++
        }
    }
    if(matrix[i+1] != undefined){
        if(matrix[i+1][j] === true){
            count++
        }
    }
    if(matrix[i+1] != undefined){
        if(matrix[i+1][j+1] === true){
            count++
        }
    }
    return count
}

matrix1 = [[true,false,false], 
 [false,true,false], 
 [false,false,false]]
matrix2 = [[true,false,false,true], 
 [false,false,true,false], 
 [true,true,false,true]]
matrix3 = [[true,true,true], 
 [true,true,true], 
 [true,true,true]]

console.log(minesweeper(matrix1))
// [[1,2,1], 
// [2,1,1], 
// [1,1,1]]
console.log(minesweeper(matrix2))
// [[0,2,2,1], 
//  [3,4,3,3], 
//  [1,2,3,1]]
console.log(minesweeper(matrix3))
// [[3,5,3], 
//  [5,8,5], 
//  [3,5,3]]
