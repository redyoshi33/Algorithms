function boxBlur(image) {
    let box = []
    for(let i = 0; i<image.length-2; i++){
        let temp = []
        for(let j = 0; j<image[0].length-2; j++){
            temp.push(block(image,i,j))
        }
        box.push(temp)
    }
    return box
}
function block(image, i, j){
    let sum = 0
    sum += image[i][j] + image[i][j+1] + image[i][j+2] 
    sum += image[i+1][j] + image[i+1][j+1] + image[i+1][j+2]
    sum += image[i+2][j] + image[i+2][j+1] + image[i+2][j+2]
    return Math.floor(sum/9)
}

image1 = [[1,1,1], 
 [1,7,1], 
 [1,1,1]]
image2 = [[36,0,18,9,9,45,27], 
 [27,0,54,9,0,63,90], 
 [81,63,72,45,18,27,0], 
 [0,0,9,81,27,18,45], 
 [45,45,27,27,90,81,72], 
 [45,18,9,0,9,18,45], 
 [27,81,36,63,63,72,81]]
image3 = [[36,0,18,9], 
 [27,54,9,0], 
 [81,63,72,45]]

 console.log(boxBlur(image1)) //[[1]]
 console.log(boxBlur(image2)) 
 // [[39,30,26,25,31], 
 // [34,37,35,32,32], 
 // [38,41,44,46,42], 
 // [22,24,31,39,45], 
 // [37,34,36,47,59]]
 console.log(boxBlur(image3)) //[[40,30]]