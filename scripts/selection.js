const selectionBtn = document.getElementById("selection-sort");

selectionBtn.addEventListener("click", async function() {
    await selectionSort();
})

async function selectionSort() {
    const elements = document.querySelectorAll(".bars");
    length = elements.length;
    for(let i = 0; i < length; i++){
        let min_index = i
        elements[i].style.background = "green"
        for(let j = i+1; j < length; j++){
            // elements[j].style.background = "red"
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
        swap(elements[min_index], elements[i]);
        elements[i].style.background = 'green';
    }
    
}

