const bubbleBtn = document.getElementById("bubble-sort");

bubbleBtn.addEventListener("click", async function() {
    await bubbleSort();
})


async function bubbleSort() {
    const elements = document.querySelectorAll(".bars");
    length = elements.length;
    for(let i = 0; i < length - 1; i++){
        for(let j = 0; j < length-1-i; j++){
            elements[j].style.background = "red";
            elements[j+1].style.background = "red";
            if(parseInt(elements[j].style.height) >= parseInt(elements[j+1].style.height)){
                await wait(delay);
                swap(elements[j], elements[j + 1]);
            }

            elements[j].style.background = "white";
            elements[j+1].style.background = "white";
        }
        elements[length-1-i].style.background = 'green';
    }
    elements[0].style.background = 'green';
}






