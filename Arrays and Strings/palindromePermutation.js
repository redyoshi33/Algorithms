var str = "tact oa"
console.log(palinPerm(str))

function palinPerm(str){
	var hash = {}
	var oneOdd = false
	for(var i = 0; i<str.length; i++){
		if(str[i] != " "){
			if(hash[str[i]]){
				hash[str[i]] += 1
			}
			else{
				hash[str[i]] = 1
			}			
		}
	}
	var bool = true
	Object.keys(hash).forEach(function (key){
		var value = hash[key]
		if(value % 2 == 1){
			if(!oneOdd){
				oneOdd = true
			}
			else{
				bool = false
			}
		}
	})
	return bool
}