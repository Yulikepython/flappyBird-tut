document.addEventListener("keypress", handleStart, {once: true});

function updateLoop(time){
    console.log(time)
    window.requestAnimationFrame(updateLoop)

}

function handleStart(){
    const title = document.querySelector("[data-title]")
    title.classList.add("hide")
    window.requestAnimationFrame(updateLoop)
}

function handleLose(){

}