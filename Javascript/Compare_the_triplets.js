function comparetrips(a, b) {
    var A = 0
    var B = 0
    for(var x = 0; x < 3; x++){
        if(a[x] > b[x]){
            A++
        }
        else if(a[x] < b[x]){
            B++
        }
    }
    console.log(A, B)
    return A, B
}
var a = [5, 6, 7]
var b = [3, 6, 10]

comparetrips(a,b)