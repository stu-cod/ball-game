'use strict'

var ballSize = 100

function onBallClick(elBall,maxDiameter) {
    const randIncNum = getRandomInt(20, 60) 
    const randColor = getRandomColor()

    elBall.style.backgroundColor = randColor 
    ballSize += randIncNum

    if(ballSize > maxDiameter) ballSize = 100
    elBall.style.width = `${ballSize}px`
    elBall.style.height = `${ballSize}px`
    elBall.innerText = ballSize
}