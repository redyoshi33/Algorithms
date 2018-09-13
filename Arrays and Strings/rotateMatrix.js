var a = [[1, 2, 3,4],
     	[5, 6, 7, 8],
     	[9, 10, 11, 12],
     	[13, 14, 15, 16]]
console.log(a)
console.log(rotateMatrix(a))


function rotateMatrix(arr){
	var a = []
	for(var i = 0; i<arr.length; i++){
		a.push([])
		for(var j=arr.length-1; j>=0; j--){
			a[i].push(arr[j][i])
		}
	}
	return a
}