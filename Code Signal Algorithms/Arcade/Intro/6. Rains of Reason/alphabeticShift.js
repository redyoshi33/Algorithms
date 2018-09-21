function alphabeticShift(inputString) {
    let newstr = ""
    for(let i = 0; i<inputString.length; i++){
        let code = inputString[i] == "z" ? "a".charCodeAt(0) : inputString.charCodeAt(i) + 1
        newstr += String.fromCharCode(code)
    }
    return newstr
}

str1 = "crazy"
str2 = "aaaabbbccd"
str3 = "fuzzy"

console.log(alphabeticShift(str1)) //"dsbaz"
console.log(alphabeticShift(str2)) //"bbbbcccdde"
console.log(alphabeticShift(str3)) //"gvaaz"