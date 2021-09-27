const quickBtn = document.getElementById("quick-sort");

quickBtn.addEventListener("click", async function() {
    const array = document.querySelectorAll(".bars")
    length = array.length;
    let start = 0;
    let end = length - 1;
    buttonsDisabled()
    await quickSort(start, end, array);
    buttonsEnabled()
});


// main function
async function quickSort(start, end, array) {
    
    if (start < end){
        //p is partition_index
        let p = await partition(start,end,array)

        await quickSort(start, p - 1, array)
        await quickSort(p + 1, end, array)
    }
    else {
        if(start >= 0 && end >= 0 && start < array.length && end < array.length){
            array[start].style.background = "green";
            array[end].style.background = "green";
           
        }
    }
}
/* partition function takes last element as pivot ,places the pivot element at its correct
position in sorted array, and places all smaller (smaller than pivot) to left and all greater than elements to the right of pivot
*/
async function partition(start, end, array){
    
    //pivot - the element to be placed at the right position
    pivot = array[end]
    /*Index of smaller element and indicates the right position found so far*/
    i =  start - 1  
    
    for (j = start; j <= end - 1; j++){
        await wait(delay);
        //if current element height is smaller than the pivot
        if (parseInt(array[j].style.height) < parseInt(pivot.style.height)){
            i++; //increment the index of smalller element   
            swap(array[i],array[j])
            array[i].style.background = "red";
            await wait(delay);
        }
        else{ 
            array[j].style.background = "white";
        }
        await wait(delay);
    }
    i++
    await wait(delay);
    //swaps the element with pivot
    swap(array[i], pivot); 
    
    pivot.style.background = "white";
    array[i].style.background = "green";
    await wait(delay);
    
    for(let k = 0; k < array.length; k++){
        
        if(array[k].style.background != "green"){
            array[k].style.background = "yellow";
        }
        
    }

    return i;
}
