var str1="abca"
var str2="caba"
var str3='fdsa'

console.log(checkPer(str1, str2))
console.log(checkPer(str1, str3))
function checkPer(s1, s2){
	if(s1.length != s2.length){
		return false
	}
	var hash = {}
	for(var i = 0; i<s1.length; i++){
		if(hash[s1[i]]){
			hash[s1[i]] +=1
		}
		else{
			hash[s1[i]] = 1
		}
		if(hash[s2[i]]){
			hash[s2[i]] -= 1
		}
		else{
			hash[s2[i]] = -1
		}
	}
	var bool = true
	Object.keys(hash).forEach(function (key){
		var value = hash[key]
		if(value != 0){
			bool = false
		}
	})
	return bool
}