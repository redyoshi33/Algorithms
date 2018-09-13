var str1 = "pale"
var str2 = "abale"
console.log(oneAway(str1, str2))
function oneAway(str1, str2){
	if(str1.length == str2.length){
		return oneReplace(str1, str2)
	}
	else if(str1.length + 1 == str2.length){
		return oneInsert(str1, str2)
	}
	else if(str2.length + 1 == str1.length){
		return oneInsert(str2, str1)
	}
	return false
}

function oneReplace(str1, str2){
	var changed = false
	for(var i = 0; i<str1.length; i++){
		if(str1[i] != str2[i]){
			if(changed){
				return false
			}
			else{
				changed = true
			}
		}
	}
	return true
}

function oneInsert(str1, str2){
	var ind1 = 0
	var ind2 = 0
	if(str1.length < str2.length){
		var minlen = str1.length
	}
	else{
		var minlen = str2.length
	}
	while(ind1 < str1.length && ind2 < str2.length){//can use while loops 
		if(str1[ind1] != str2[ind2]){
			if(ind1 != ind2){
				return false
			}
			ind2++
		}
		else{
			ind1++
			ind2++
		}
	}
	return true
}
