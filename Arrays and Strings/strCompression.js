var str = "aabcccccaaagdsafdsa"
console.log(strCompression(str))
function strCompression(str){
	var newstr = ""
	var letter = str[0]
	var count = 0
	for(var i=0; i<str.length; i++){
		if(letter != str[i]){
			newstr += letter + count
			letter = str[i]
			count = 1
		}
		else{
			count++
		}
	}
	newstr += letter
	newstr += count
	if(newstr.length > str.length){
		return str
	}
	else{
		return newstr
	}
}