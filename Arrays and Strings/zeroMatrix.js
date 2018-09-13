var a = [[1, 2, 3, 0],
     	[5, 6, 7, 8],
     	[9, 10, 11, 12]]
console.log(a)
console.log(zeroMatrix(a))

function zeroMatrix(arr){
	for(var i=0; i<arr.length; i++){
		for(var j=0; j<arr[0].length; j++){
			if(arr[i][j] === 0){
				return turnzero(arr, i, j)
			}
		}
	}
	return arr
}

function turnzero(arr, ind1, ind2){
	for(var i=0; i<arr[ind1].length; i++){
		arr[ind1][i] = 0
	}
	for(var j=0; j<arr.length; j++){
		arr[j][ind2] = 0
	}
	return arr
}