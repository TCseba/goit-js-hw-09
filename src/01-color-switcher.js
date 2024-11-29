const startBtn = document.querySelector('[data-start]')
const stopBtn = document.querySelector('[data-stop]')
let colorInterval = null
startBtn.addEventListener('click', () =>
{
startBtn.disabled=true
colorInterval = setInterval(() => {
        document.body.style.backgroundColor = getRandomHexColor()
  },1000)    
})

stopBtn.addEventListener('click', () => {
    startBtn.disabled = false
    clearInterval(colorInterval) 
})
function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}