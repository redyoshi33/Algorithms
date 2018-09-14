function alternatingSums(a) {
    let arr = [a[0],0]
    for(let i = 1; i<a.length; i++){
        if(i%2 == 0){
            arr[0] += a[i]
        }
        else{
            arr[1] += a[i]
        }
    }
    return arr
}

arr1 = [50, 60, 60, 45, 70]
arr2 = [100, 50]
arr3 = [80]

console.log(alternatingSums(arr1)) //[180, 105]
console.log(alternatingSums(arr2)) //[100, 50]
console.log(alternatingSums(arr3)) //[80, 0]