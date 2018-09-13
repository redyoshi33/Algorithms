var string=' MR John Smith      '
console.log(URLify(string))

function URLify(str){
	var newstr = ""
	var space = false
	for(var i = 0; i<str.length; i++){
		if(str[i] != " "){
			if(space){
				newstr += "%20"
			}
			newstr += str[i]
			space = false
		}
		else{
			if(newstr.length != 0){
				space = true
			}
		}
	}
	return newstr	
}