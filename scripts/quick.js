const quickBtn = document.getElementById("quick-sort");

quickBtn.addEventListener("click", async function() {
    const array = document.querySelectorAll(".bars")
    length = array.length;
    let start = 0;
    let end = length - 1;
    await quickSort(start, end, array);
});


// main function
async function quickSort(start, end, array) {
    
    if (start < end){
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
// partition function
async function partition(start, end, array){
     
    i =  start - 1  
    
    for (j = start; j <= end - 1; j++){
        await wait(delay);
        if (parseInt(array[j].style.height) < parseInt(array[end].style.height)){
            i++;    
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
    swap(array[i], array[end]); 
    
    array[end].style.background = "white";
    array[i].style.background = "green";
    await wait(delay);
    
    for(let k = 0; k < array.length; k++){
        
        if(array[k].style.background != "green"){
            array[k].style.background = "yellow";
        }
        
    }

    return i;
}
