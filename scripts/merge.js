const mergeBtn = document.getElementById("merge-sort");

mergeBtn.addEventListener("click", async function() {
    let array = document.querySelectorAll('.bars');
    let left = 0;
    let right = parseInt(array.length) - 1;
    buttonsDisabled();
    await mergeSort(array, left, right);
    buttonsEnabled();
})

//main function
async function mergeSort(array, left, right) {
    const elements = document.querySelectorAll(".bars");
    length = elements.length;
    
    if(left >= right){
        return;//returns recursively
    }
    let mid = left + parseInt((right-left)/2);
    await mergeSort(array ,left ,mid);
    await mergeSort(array , mid+1, right);
    await merge(array ,left ,mid ,right);
    
}

//merging function
async function merge(array, left, mid, right)
{
    let n1 = mid - left + 1;
    let n2 = right - mid;
  
    // Create temporary arrays
    let leftArray = new Array(n1); 
    let rightArray = new Array(n2);
  
    // Copy data to temporary array leftArray 
    for (let i = 0; i < n1; i++){
        await wait(delay);
        array[left + i].style.background = "red"
        leftArray[i] = array[left + i].style.height;
    }
    // Copy data to temporary array rightArray 
    for (let j = 0; j < n2; j++){
        await wait(delay);
        array[mid + 1 + j].style.background = 'yellow';
        rightArray[j] = array[mid + 1 + j].style.height;
    }
    await wait(delay);
  
    // Initial index of first subarray
    let i = 0;
  
    // Initial index of second subarray
    let j = 0;
  
    // Initial index of merged subarray
    let k = left;
  
    while (i < n1 && j < n2) {
        await wait(delay);
        if (parseInt(leftArray[i]) <= parseInt
        (rightArray[j])) {
            await wait(delay);
            if((n1 + n2) === array.length){
                array[k].style.background = 'green';
            }
            else{
                array[k].style.background = 'yellow';
            }
            array[k].style.height = leftArray[i];
            i++;
        }
        else {
            await wait(delay);
            if((n1 + n2) === array.length){
                array[k].style.background = 'green';
            }
            else{
                array[k].style.background = 'yellow';
            } 
            array[k].style.height = rightArray[j];
            j++;
        }
        k++;
    }
  
    // Copy the remaining elements of
    // leftArray[], if there are any
    while (i < n1) {
        await wait(delay);
        if((n1 + n2) === array.length){
            await wait(delay);
            array[k].style.background = 'green';
        }
        else{
            await wait(delay);
            array[k].style.background = 'yellow';
        }
        array[k].style.height = leftArray[i];
        i++;
        k++;
    }
  
    // Copy the remaining elements of
    // rightArray[], if there are any
    while (j < n2) {
        await wait(delay);
        if((n1 + n2) === array.length){
            array[k].style.background = 'green';
        }
        else{
            array[k].style.background = 'yellow';
        }
        array[k].style.height = rightArray[j];
        j++;
        k++;
    }
}
  
