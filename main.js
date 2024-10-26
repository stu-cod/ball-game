'use strict'

var ballSize = 100

function onBallClick() {
    const elBall = document.querySelector(".ball")
    const randIncNum = getRandomInt(20, 60) 
    ballSize += randIncNum
    if(ballSize > 400) ballSize = 100
    elBall.style.width = `${ballSize}px`
    elBall.style.height = `${ballSize}px`
    elBall.innerText = ballSize
}