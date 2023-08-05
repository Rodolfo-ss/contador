const buttonStart = document.querySelector('.start-button')
const buttonStop = document.querySelector('.stop-button')
const buttonZero = document.querySelector('.zero-button')
const counter = document.querySelector('.number')

let start = 0
let inTime = null


buttonStart.addEventListener('click', () => {
     inTime = setInterval(() => {
       counter.textContent = ++start
     },1000)
})

buttonStop.addEventListener('click', () => {
     clearInterval(inTime)

})

buttonZero.addEventListener('click', () => {
     clearInterval(inTime)
     counter.textContent = start = 0
})