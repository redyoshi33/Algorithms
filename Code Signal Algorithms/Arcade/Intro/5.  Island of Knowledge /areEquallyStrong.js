function areEquallyStrong(yourLeft, yourRight, friendsLeft, friendsRight) {
    if(yourLeft == friendsLeft || yourLeft == friendsRight){
        return yourLeft + yourRight == friendsLeft + friendsRight
    }
    return false
}

a = 10; b = 15; c = 15; d = 10
e = 15; f = 10; g = 15; h = 9
i = 10; j = 15; k = 5; l = 20

console.log(areEquallyStrong(a,b,c,d)) //true
console.log(areEquallyStrong(e,f,g,h)) //false
console.log(areEquallyStrong(i,j,k,l)) //true