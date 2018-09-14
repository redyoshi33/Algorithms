function sortByHeight(a) {
    let newarr = a.map(n => {
        if(n != -1){
            return n
        }})
    newarr.sort(function(a, b) {return a - b;})
    for(let j = 0; j < a.length; j++){
        if(a[j] != -1){
            a[j] = newarr.shift()
        }
    }
    return a
}

arr1 = [-1, 150, 190, 170, -1, -1, 160, 180]
arr2 = [4, 2, 9, 11, 2, 16]
arr3 = [23, 54, -1, 43, 1, -1, -1, 77, -1, -1, -1, 3]

console.log(sortByHeight(arr1)) //[-1, 150, 160, 170, -1, -1, 180, 190]
console.log(sortByHeight(arr2)) //[2, 2, 4, 9, 11, 16]
console.log(sortByHeight(arr3)) //[1, 3, -1, 23, 43, -1, -1, 54, -1, -1, -1, 77]