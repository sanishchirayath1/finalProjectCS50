const arrayBtn = document.getElementById("array");
const wrapper = document.getElementById("wrapper");


arrayBtn.addEventListener("click", function(){
    
   
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
        bar.setAttribute("id", `el${i}`)
        container.appendChild(bar)
    }
    
})

function clearBars() {
    let container = document.getElementById("container");
    container.remove();
}

function swap(el1,el2){
  
    const style1 = window.getComputedStyle(el1);
    const style2 = window.getComputedStyle(el2);

    const transform1 = style1.getPropertyValue("height");
    const transform2 = style2.getPropertyValue("height");

    el1.style.height = transform2;
    el2.style.height = transform1;

}

let delay = 2
function wait(delay) { 
    return new Promise(resolve => { 
        setTimeout(() => { resolve('') }, delay); 
    }) 
}