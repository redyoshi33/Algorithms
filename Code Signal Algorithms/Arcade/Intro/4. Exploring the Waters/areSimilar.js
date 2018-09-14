function areSimilar(a, b) {
    let num1, num2
    let swap = false
    for(let i = 0; i<a.length; i++){
        if(a[i] != b[i]){
            if(!num1 && !swap){
                num1 = b[i]
                num2 = a[i]
            }
            else if(num1 == a[i] && num2 == b[i]){
                swap = true
                num1 = null
                num2 = null
            }
            else{
                return false
            }
        }
    }
    return true
}

a = [1, 2, 3]; b = [2, 1, 3]
c = [1, 2, 2]; d = [2, 1, 1]
e = [1, 4, 2, 5, 3, 6, 3, 8, 4, 2, 25]; f =[1, 4, 2, 5, 3, 3, 7, 8, 4, 2, 25]

console.log(areSimilar(a,b)) //true
console.log(areSimilar(c,d)) //false
console.log(areSimilar(e,f)) //false