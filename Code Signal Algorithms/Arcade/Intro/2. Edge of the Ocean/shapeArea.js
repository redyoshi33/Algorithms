function shapeArea(n) {
    var hash = {1: 1}
    for(let i = 1; i<n; i++){
        hash[i+1] = hash[i] + 4*i
    }
    return hash[n]
}

console.log(shapeArea(2)) //5
console.log(shapeArea(3)) //13
console.log(shapeArea(5)) //41