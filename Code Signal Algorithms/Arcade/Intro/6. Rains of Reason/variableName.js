function variableName(name) {
    var regex = /^[a-z_]\w*$/i
    return regex.test(name)
}

name1 = "var_1__Int"
name2 = "qq-q"
name3 = "2w2"

console.log(variableName(name1)) //true
console.log(variableName(name2)) //false
console.log(variableName(name3)) //false