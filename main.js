'use strict'

var ballSize = 100

function onBallClick() {
    const elBall = document.querySelector(".ball")

    ballSize += 50
    
    elBall.style.width = `${ballSize}px`
    elBall.style.height = `${ballSize}px`
    elBall.innerText = ballSize
}