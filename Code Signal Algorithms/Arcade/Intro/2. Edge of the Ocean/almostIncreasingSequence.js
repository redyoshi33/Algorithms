function almostIncreasingSequence(sequence) {
    for(let i = 0; i<sequence.length-1; i++){
        if(sequence[i]>= sequence[i+1]){
            if(sequence[i-1] >= sequence[i+1]){
                sequence.splice(i+1,1)
            }
            else{
                sequence.splice(i,1)
            }
            var index = i-1
            break
        }
    }
    for(let i =index; i<sequence.length-1; i++){
        if(sequence[i]>= sequence[i+1]){
            return false
        }
    }
    return true
}

var arr1 = [1, 3, 2, 1]
var arr2 = [10, 1, 2, 3, 4, 5]
var arr3 = [1, 2, 3, 4, 5, 3, 5, 6]

console.log(almostIncreasingSequence(arr1)) //false
console.log(almostIncreasingSequence(arr2)) //true
console.log(almostIncreasingSequence(arr3)) //false