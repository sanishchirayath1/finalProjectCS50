const quickBtn = document.getElementById("quick-sort");

quickBtn.addEventListener("click", async function() {
    await quickSort();
})

// main function
async function quickSort(start, end, array) {
    const elements = document.querySelectorAll(".bars");
    length = elements.length; 
    if (start < end){
        p = partition(start,end,array)

        quickSort(start, end, array)
        quickSort(p + 1, end, array)
    }
}
// partition function
function partition(start, end, array){
    pivot_index = star
    pivot = array[pivot_index]

    while(start < end){
        
        while(start < array.length && array[start] <= pivot){
            start += 1
        }
        while (array[end] > pivot) {
            end -= 1
        }

        if(start < end){
            swap(array[start], array[end])
        }
    }
    swap(array[end], array[pivot_index])
    return end
}
