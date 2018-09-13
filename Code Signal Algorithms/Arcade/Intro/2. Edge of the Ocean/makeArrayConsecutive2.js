function makeArrayConsecutive2(statues) {
    var min = statues[0], max = statues[0]
    for(let i = 0; i<statues.length; i++){
        if(statues[i]<min){
            min = statues[i]
        }
        if(statues[i]>max){
            max = statues[i]
        }
    }
    return max-min-statues.length+1
}

var statues1 = [6, 2, 3, 8]
var statues2 = [0, 3]
var statues3 = [5, 4, 6]

console.log(makeArrayConsecutive2(statues1)) //3
console.log(makeArrayConsecutive2(statues2)) //2
console.log(makeArrayConsecutive2(statues3)) //0