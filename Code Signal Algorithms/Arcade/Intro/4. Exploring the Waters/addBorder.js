function addBorder(picture) {
    let border = "**"
    for(let i =0; i<picture[0].length; i++){
        border += "*"
    }
    let matrix = [border]
    for(let j = 0; j<picture.length; j++){
        let temp = "*"+picture[j]+"*"
        matrix.push(temp)
    }
    matrix.push(border)
    return matrix
}

pic1 = ["abc", 
        "ded"]
pic2 = ["a"]
pic3 = ["aa", 
        "**", 
        "zz"]

console.log(addBorder(pic1))
// ["*****", 
//  "*abc*", 
//  "*ded*", 
//  "*****"]
console.log(addBorder(pic2))
// ["***", 
//  "*a*", 
//  "***"]
console.log(addBorder(pic3))
// ["****", 
//  "*aa*", 
//  "****", 
//  "*zz*", 
//  "****"]
