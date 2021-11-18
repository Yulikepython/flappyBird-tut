import {updateBird} from "./bird.js"

document.addEventListener("keypress", handleStart, {once: true});

let lastTime

function updateLoop(time){
    if (lastTime == null) {
        lastTime = time
        window.requestAnimationFrame(updateLoop)
        return
    }
    const delta = time - lastTime
    updateBird(delta)
    lastTime = time
    window.requestAnimationFrame(updateLoop)
}

function handleStart(){
    const title = document.querySelector("[data-title]")
    title.classList.add("hide")
    window.requestAnimationFrame(updateLoop)
}

function handleLose(){

}