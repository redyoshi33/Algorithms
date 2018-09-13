var string = 'bcaaaaabca'
function maxletter(str){
	var dict = {}
  for(var i = 0; i < str.length; i++){
  	if(dict[str[i]]){
    	dict[str[i]]++
    }
    else{
    	dict[str[i]] = 1
    }
  }
  var arr = Object.keys(dict).sort(function(a,b){return dict[b]-dict[a]})
  console.log(arr)
  return arr[0]
}
console.log(maxletter(string))