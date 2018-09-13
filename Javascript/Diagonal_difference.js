function diagonalDifference(a) {
    var sqrt = Math.sqrt(a.length)
    var sum1 = 0
    var sum2 = 0
    if(sqrt % 1 == 0){
        for(var x = 0; x < a.length; x+= sqrt+1){
            sum1 += a[x]
        }
        for(var y = sqrt-1; y < a.length-1; y+= sqrt-1){
            sum2 += a[y]
        }
        sum1 -= sum2
        sum1 = Math.abs(sum1)
        return sum1
    }
}
var array = [11, 2, 4, 4, 5, 6, 10, 8, -12]
diagonalDifference(array)