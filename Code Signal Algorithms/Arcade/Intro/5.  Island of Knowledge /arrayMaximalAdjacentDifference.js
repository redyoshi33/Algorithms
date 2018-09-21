function arrayMaximalAdjacentDifference(inputArray) {
    let max = Math.abs(inputArray[0]-inputArray[1])
    for(let i = 1; i < inputArray.length-1; i++){
        if(Math.abs(inputArray[i] - inputArray[i+1]) > max){
            max = Math.abs(inputArray[i] - inputArray[i+1])
        }
    }
    return max
}

arr1 = [2, 4, 1, 0]
arr2 = [1, 1, 1, 1]
arr3 = [-1, 1, -3, -4]

console.log(arrayMaximalAdjacentDifference(arr1)) //3
console.log(arrayMaximalAdjacentDifference(arr2)) //0
console.log(arrayMaximalAdjacentDifference(arr3)) //4