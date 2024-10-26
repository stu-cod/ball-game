'use strict'



function onBallClick(elBall, maxDiameter) {
    var ballSize = +elBall.innerText
    console.log('elBall.innerText:', elBall.innerText)
    const randIncNum = getRandomInt(20, 60) 
    const randColor = getRandomColor()

    elBall.style.backgroundColor = randColor 
    ballSize += randIncNum

    if(ballSize > maxDiameter) ballSize = 100
    elBall.style.width = `${ballSize}px`
    elBall.style.height = `${ballSize}px`
    console.log('ballSize:', ballSize)
    elBall.innerText = ballSize
}