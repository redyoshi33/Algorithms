function arrayReplace(inputArray, elemToReplace, substitutionElem) {
    inputArray = inputArray.map(x => x===elemToReplace ? x=substitutionElem : x)
    return inputArray
}

inputArray1 = [1, 2, 1]
e1 = 1
s1 = 3

inputArray2 = [1, 2, 3, 4, 5]
e2 = 3
s2 = 0

console.log(arrayReplace(inputArray1, e1, s1))//[3, 2, 3]
console.log(arrayReplace(inputArray2, e2, s2))//[1, 2, 0, 4, 5]