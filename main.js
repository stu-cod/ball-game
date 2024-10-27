'use strict'

const elBall = document.querySelector(".ball")
const elBall2 = document.querySelector(".ball2")

function onInit() {
    document.body.style.backgroundColor = "black"

    elBall.style.backgroundColor = 'blue'
    elBall2.style.backgroundColor = 'red'

    elBall.style.width = 100 + 'px'
    elBall.style.height = 100 + 'px'
    elBall2.style.width = 100 + 'px'
    elBall2.style.height = 100 + 'px'

    elBall.innerText = 100
    elBall2.innerText = 100
}

function onBallClick(elBall, maxDiameter) {
    var ballSize = parseInt(elBall.style.width)
    console.log('ballSize:', ballSize)

    const randIncNum = getRandomInt(20, 60)
    const randColor = getRandomColor()

    elBall.style.backgroundColor = randColor
    ballSize += randIncNum

    if (ballSize > maxDiameter) ballSize = 100
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.innerText = ballSize
}

function onBall3Click() {
    const ballColor = elBall.style.backgroundColor
    const ballWidth = elBall.style.width
    const ballHieght = elBall.style.height

    const ball2Color = elBall2.style.backgroundColor
    const ball2Width = elBall2.style.width
    const ball2Hieght = elBall2.style.height

    elBall.style.backgroundColor = ball2Color
    elBall.style.width = ball2Width
    elBall.style.height = ball2Hieght
    elBall.innerText = parseInt(ball2Width)

    elBall2.style.backgroundColor = ballColor
    elBall2.style.width = ballWidth
    elBall2.style.height = ballHieght
    elBall2.innerText = parseInt(ballWidth)
}

function onBall4Click() {
    var ballSize = parseInt(elBall.style.width)
    var ball2Size = parseInt(elBall2.style.width)
    const randReduceNum = getRandomInt(20, 60)

    ballSize -= randReduceNum
    ball2Size -= randReduceNum

    if (ballSize < 100) ballSize = 100
    if (ball2Size < 100) ball2Size = 100
    elBall.style.width = ballSize + 'px'
    elBall.style.height = ballSize + 'px'
    elBall.innerText = ballSize
    elBall2.style.width = ball2Size + 'px'
    elBall2.style.height = ball2Size + 'px'
    elBall2.innerText = ball2Size
}

function onBall5Click() {
    const randColor = getRandomColor()
    document.body.style.backgroundColor = randColor
}

function onBall6Click() {
    onInit()
}

