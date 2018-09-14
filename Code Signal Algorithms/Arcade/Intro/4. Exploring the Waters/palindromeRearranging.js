function palindromeRearranging(inputString) {
    let hash = {}
    for(let i = 0; i < inputString.length; i++){
        if(hash[inputString[i]]){
            hash[inputString[i]]++
        }
        else{
            hash[inputString[i]] = 1
        }
    }
    let oddnum = 0
    for(let key in hash){
        if(hash[key] % 2 == 1){
            oddnum++
        }
    }
    return oddnum < 2
}

str1 = "aabb"
str2 = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc"
str3 = "abbcabb"

console.log(palindromeRearranging(str1)) //true
console.log(palindromeRearranging(str2)) //false
console.log(palindromeRearranging(str3)) //true