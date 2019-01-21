function swap(items, firstIndex, secondIndex){
    const temp = items[firstIndex];
    items[firstIndex] = items[secondIndex];
    items[secondIndex] = temp;
}

function selectionSort(items){
    'use strict'
    
    const len = items.length;
    var min;

    for(let i =0; i < len; i ++){
        //set minimun to this position
        min =i;

        //check the rest of the array to see if anything is smaller
        for(let j = i +1; j < len; j++){
            if(items[j] < items[min]){
                min = j;
            }
        }

        // if the minimo isn't in the position, swap it
        if(i != min){
            swap(items, i, min)
        }
    }
}

let myArr = [20,3,10,44,9,1];

selectionSort(myArr)
console.log(myArr)