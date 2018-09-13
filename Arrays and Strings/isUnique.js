var str1 = "abcd"
var str2 = "abca"

function isUnique(str){
	var hash = {}
	for(var i = 0; i<str.length; i++){
		if(hash[str[i]]){
			return false
		}
		else{
			hash[str[i]] = 1
		}
	}
	return true
}
console.log(isUnique(str1))
console.log(isUnique(str2))

function isUnique2(str){//without additional data structures
	for(var i = 0; i<str.length-1; i++){
		for(var j = i+1; j<str.length; j++){
			if(str[i]===str[j]){
				return false
			}
		}
	}
	return true
}
console.log(isUnique2(str1))
console.log(isUnique2(str2))