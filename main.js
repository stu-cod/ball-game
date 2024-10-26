'use strict'

const elBall = document.querySelector(".ball")
const elBall2 = document.querySelector(".ball2")


function onBallClick(elBall, maxDiameter) {
    var ballSize = +elBall.innerText

    const randIncNum = getRandomInt(20, 60)
    const randColor = getRandomColor()

    elBall.style.backgroundColor = randColor
    ballSize += randIncNum

    if (ballSize > maxDiameter) ballSize = 100
    elBall.style.width = `${ballSize}px`
    elBall.style.height = `${ballSize}px`
    elBall.innerText = ballSize
}

function onBall3Click() {
    const ballComputedStyle = window.getComputedStyle(elBall)
    const ball2ComputedStyle = window.getComputedStyle(elBall2)

    const ballColor = ballComputedStyle.backgroundColor
    const ballWidth = ballComputedStyle.width
    const ballHieght = ballComputedStyle.height

    const ball2Color = ball2ComputedStyle.backgroundColor
    const ball2Width = ball2ComputedStyle.width
    const ball2Hieght = ball2ComputedStyle.height
    
    elBall.style.backgroundColor = ball2Color
    elBall.style.width = ball2Width
    elBall.style.height = ball2Hieght
    elBall.innerText =  parseInt(ball2Width)

    elBall2.style.backgroundColor = ballColor
    elBall2.style.width = ballWidth
    elBall2.style.height = ballHieght
    elBall2.innerText =  parseInt(ballWidth)
}