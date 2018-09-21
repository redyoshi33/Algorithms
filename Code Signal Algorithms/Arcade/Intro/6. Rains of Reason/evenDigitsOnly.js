function evenDigitsOnly(n) {
    n = n.toString()
    for(let i = 0; i< n.length; i++){
        if(n[i] % 2 === 1){
            return false
        }
    }
    return true
}

n1 = 248622
n2 = 642386
n3 = 248842

console.log(evenDigitsOnly(n1)) //true
console.log(evenDigitsOnly(n2)) //false
console.log(evenDigitsOnly(n3)) //true