function adjacentElementsProduct(inputArray) {
    var max = inputArray[0] * inputArray[1]
    for(let i = 1; i<inputArray.length - 1; i++){
        if(inputArray[i]*inputArray[i+1] > max){
            max = inputArray[i]*inputArray[i+1]
        }
    }
    return max
}

var arr1 = [3, 6, -2, -5, 7, 3]
var arr2 = [-1, -2]
var arr3 = [5, 1, 2, 3, 1, 4]


console.log(adjacentElementsProduct(arr1)) //21
console.log(adjacentElementsProduct(arr2)) //2
console.log(adjacentElementsProduct(arr3)) //6