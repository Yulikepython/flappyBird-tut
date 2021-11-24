import {updateBird, setupBird, getBirdRect} from "./bird.js"
import {updatePipes, setupPipes, getPassedPipesCount} from "./pipe.js"


document.addEventListener("keypress", handleStart, {once: true});
const title = document.querySelector("[data-title")
const subTitle = document.querySelector("[data-subTitle")


let lastTime

function updateLoop(time){
    if (lastTime == null) {
        lastTime = time
        window.requestAnimationFrame(updateLoop)
        return
    }
    const delta = time - lastTime
    updateBird(delta)
    updatePipes(delta)
    if (checkLose()) return handleLose()
    lastTime = time
    window.requestAnimationFrame(updateLoop)
}

function checkLose(){
    const birdRect = getBirdRect()

    const outsideWorld = birdRect.top < 0 || birdRect.bottom > window.innerHeight

    return outsideWorld
}

function handleStart(){
    const title = document.querySelector("[data-title]")
    title.classList.add("hide")
    setupBird()
    setupPipes()
    lastTime = null
    window.requestAnimationFrame(updateLoop)
}

function handleLose(){
    setTimeout(()=>{
        title.classList.remove("hide")
        subTitle.classList.remove("hide")
        subTitle.textContent = `${getPassedPipesCount()} Pipes`
        document.addEventListener("keypress", handleStart, {once: true})
    }, 100)
}