function avoidObstacles(inputArray) {
    let arr = inputArray.sort((a,b) => {return a-b})
    let max = arr[arr.length-1]
    for(let i = 1; i <= max+1; i++){
        if(arr.every( x => { return x%i != 0})){
            return i
        }
    }
}

arr1 = [5, 3, 6, 7, 9]
arr2 = [1, 4, 10, 6, 2]
arr3 = [19, 32, 11, 23]

console.log(avoidObstacles(arr1)) //4
console.log(avoidObstacles(arr2)) //7
console.log(avoidObstacles(arr3)) //3