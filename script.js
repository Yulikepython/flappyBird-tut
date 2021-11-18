import {updateBird, setupBird} from "./bird.js"

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
    setupBird()
    window.requestAnimationFrame(updateLoop)
}

function handleLose(){

}