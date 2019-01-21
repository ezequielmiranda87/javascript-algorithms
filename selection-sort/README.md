# Selection sort


## Helper Swap function
The selection sort uses the sam swap() function as the bubble sort

``` javascript
function swap(items, firstIndex, seconIndex){
    var temp = items[firstIndex];
    items[firtsIndex] = seconIndex;
    items[seconIndex] = temp;
}
```