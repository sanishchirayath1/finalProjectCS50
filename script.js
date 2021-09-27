const arrayBtn = document.getElementById("array");
const wrapper = document.getElementById("wrapper");
createBars()


arrayBtn.addEventListener("click", function(){
    buttonsDisabled()
    createBars()
    buttonsEnabled()
})


let delay = 2
function wait(delay) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, delay); 
    }) 
}

function clearBars() {
    let container = document.getElementById("container");
    container.remove();
}

function swap(element1,element2){
  
    const style1 = window.getComputedStyle(element1);
    const style2 = window.getComputedStyle(element2);

    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    element1.style.height = transform2;
    element2.style.height = transform1;

}

function createBars(){
    try {
        clearBars()
    } catch {
        console.log("Lazy")
    }
    let array = [];
    let container = document.createElement("div");
    container.setAttribute("id", "container")
    wrapper.appendChild(container)
    for (i = 0; i < 100; i++) {
        array.push(Math.floor(Math.random() * 100 + 1))
    }

    for(i = 0; i < 100; i++){
        const bar = document.createElement("div")
        bar.style.height = `${array[i] * 5}px`
        bar.classList.add("bars")
        container.appendChild(bar)
    }
}

function buttonsDisabled() {
    quickBtn.disabled = true;
    bubbleBtn.disabled = true;
    selectionBtn.disabled = true;
    mergeBtn.disabled = true;
    insertionBtn.disabled = true;

}
function buttonsEnabled() {
    quickBtn.disabled = false;
    bubbleBtn.disabled = false;
    selectionBtn.disabled = false;
    mergeBtn.disabled = false;
    insertionBtn.disabled = false;

}