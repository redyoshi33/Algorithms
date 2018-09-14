function isLucky(n) {
    var str = n.toString()
    var fhalf = 0
    var lhalf = 0
    for(let i = 0; i <str.length/2; i++){
        fhalf += parseInt(str[i]) 
    }
    for(let j = str.length/2; j < str.length; j++){
        lhalf += parseInt(str[j])
    }
    if(fhalf == lhalf){
        return true
    }
    return false
}

num1 = 1230
num2 = 239017
num3 = 135009

console.log(isLucky(num1)) //true
console.log(isLucky(num2)) //false
console.log(isLucky(num3)) //true