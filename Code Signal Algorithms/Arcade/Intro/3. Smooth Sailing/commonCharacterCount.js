function commonCharacterCount(s1, s2) {
    var hash = {}
    var count = 0
    for(let i = 0; i < s1.length; i++){
        if(hash[s1[i]]){
            hash[s1[i]]++
        }
        else{
            hash[s1[i]] = 1
        }
    }
    for(let i = 0; i < s2.length; i++){
        if(hash[s2[i]]){
            hash[s2[i]]--
            count++
        }
    }
    return count
}

s1 = "aabcc"; s2 = "adcaa"
s3 = "zzzz"; s4 = "zzzzzzz"
s5 = "abca"; s6 = "xyzbac"

console.log(commonCharacterCount(s1,s2)) //3
console.log(commonCharacterCount(s3,s4)) //4
console.log(commonCharacterCount(s1,s2)) //3