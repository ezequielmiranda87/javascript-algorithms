var a = [10,30,31,4,9,100]

function bubbleSort(theArr){
    var swapped;
    do{
        swapped = false
        for(let x = 0; x < theArr.length-1; x ++){
            if(theArr[x] > theArr[x+1]){
                var temp = theArr[x];
                theArr[x] = theArr[x+1]
                theArr[x+1] = temp
                swapped = true;
            }
        }
    }
    while(swapped)
    return theArr
}

bubbleSort(a);
console.log(a);