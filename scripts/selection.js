const selectionBtn = document.getElementById("selection-sort");

selectionBtn.addEventListener("click", async function() {
    buttonsDisabled();
    await selectionSort();
    buttonsEnabled();
})

async function selectionSort() {
    const elements = document.querySelectorAll(".bars");
    length = elements.length;
    //loops through the array
    for(let i = 0; i < length; i++){
        
        //find the minimum element index in unsorted array
        let min_index = i
        elements[i].style.background = "green"
        for(let j = i+1; j < length; j++){
            elements[j].style.background = "red"
            await wait(delay)
            elements[i].style.background = "blue"
            if(parseInt(elements[j].style.height) < parseInt(elements[min_index].style.height)){
                elements[min_index].style.background = "white"
                min_index = j
                elements[min_index].style.background = "blue"
            }
            else {
                elements[j].style.background = 'white';
            }
        }
        await wait(delay);
        //swap the minimum element with first element in unsorted
        swap(elements[min_index], elements[i]);
        elements[i].style.background = 'green';
    }
    
}

