async function quickSort(array, start, end) {
    const elements = document.querySelectorAll(".bars");
    length = elements.length;
    if (parseInt(elements[start].style.height) < parseInt(elements[end].style.height)){

    }
}
const quickBtn = document.getElementById("quick-sort");

quickBtn.addEventListener("click", async function() {
    await insertionSort();
})
