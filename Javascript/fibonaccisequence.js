function fibsq(n){
	if(n < 0){
		return false
	}
	if(n < 2){
		return 1
	}
	return fibsq(n-1) + fibsq(n-2)
}

console.log(fibsq(-1))
console.log(fibsq(1))

console.log(fibsq(4))

function fibnorecur(n){
	var arr = [1,1]
	if(n<2){
		return arr[n]
	}
	for(let i = 1; i < n; i++){
		arr.push(arr[i] + arr[i-1])
	}
	return arr[n]
}

console.log(fibnorecur(50))