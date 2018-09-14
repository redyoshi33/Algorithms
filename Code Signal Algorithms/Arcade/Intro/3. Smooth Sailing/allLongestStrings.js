function allLongestStrings(inputArray) {
    var max = inputArray[0].length
    var arr = [inputArray[0]]
    for(let i = 1; i<inputArray.length; i++){
        if(inputArray[i].length>max){
            max = inputArray[i].length
            arr = [inputArray[i]]
        }
        else if(inputArray[i].length == max){
            arr.push(inputArray[i])
        }
    }
    return arr
}

arr1 = ["aba", "aa", "ad", "vcd", "aba"]
arr2 = ["abc", "eeee", "abcd", "dcd"]
arr3 = ["a", "abc", "cbd", "zzzzzz", "a", "abcdef", "asasa", "aaaaaa"]

console.log(allLongestStrings(arr1)) //["aba", "vcd", "aba"]
console.log(allLongestStrings(arr2)) //["eeee", "abcd"]
console.log(allLongestStrings(arr3)) //["zzzzzz", "abcdef", "aaaaaa"]