function isIPv4Address(inputString) {
    let arr = inputString.split('.')
    if(arr.length != 4){ 
        return false
    }
    for(let i = 0; i < arr.length; i++){
        if(isNaN(arr[i]) || !arr[i]){
            return false
        }
        let int = parseInt(arr[i])
        
        if(int > 255 || int < 0){
            return false
        }
    }
    return true
}

str1 = "172.16.254.1"
str2 = "1.1.1.1a"
str3 = ".254.255.0"

console.log(isIPv4Address(str1)) //true
console.log(isIPv4Address(str2)) //false
console.log(isIPv4Address(str3)) //false