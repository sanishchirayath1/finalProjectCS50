const bubbleBtn = document.getElementById("bubble-sort");

bubbleBtn.addEventListener("click", async function() {
    buttonsDisabled()
    await bubbleSort();
    buttonsEnabled()
})

//sort function
async function bubbleSort() {
    const elements = document.querySelectorAll(".bars");
    length = elements.length;
    //loops through every element
    for(let i = 0; i < length - 1; i++){
        //loops through the new array where there is length-1-i elements as the last element is already in place
        for(let j = 0; j < length-1-i; j++){
            elements[j].style.background = "red";
            elements[j+1].style.background = "red";
            //loops through the array and swaps the element if found greater than next element
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






