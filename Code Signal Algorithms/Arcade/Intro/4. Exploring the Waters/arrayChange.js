function arrayChange(inputArray) {
    let count = 0
    for(let i = 0; i<inputArray.length-1; i++){
        if(inputArray[i] >= inputArray[i+1]){
            count += inputArray[i] - inputArray[i+1] + 1
            inputArray[i+1] = inputArray[i] + 1
        }
    }
    return count
}

arr1 = [1, 1, 1]
arr2 = [-1000, 0, -2, 0]
arr3 = [2, 1, 10, 1]

console.log(arrayChange(arr1)) //3
console.log(arrayChange(arr2)) //5
console.log(arrayChange(arr3)) //12