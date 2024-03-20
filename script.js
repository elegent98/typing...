const text = document.querySelector('.sec-text')

const textLoad = () => {
    setTimeout(() => {
        text.textContent = "Software Developer"
    }, 0)
    setTimeout(() => {
        text.textContent = "Frontend Developer"
    }, 4000)
} 
textLoad()
setInterval(textLoad, 4000)