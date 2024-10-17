
/*=================== toggle style switcher ==========================*/
const open = document.querySelector('.open')
const  styleSwitcher = document.querySelector('.style-switcher')
const styleSwitcherToggle = document.querySelector('#spin');
styleSwitcherToggle.addEventListener('click', () => {
    styleSwitcher.style.transform = 'translateX(0%)';
}) 


/*=================== theme colors ==========================*/
const alternateStyles = document.querySelectorAll('.alternate-style');
function setActiveStyle(color){
    alternateStyles.forEach((style) => {
        if(color === style.getAttribute('title')){
            style.removeAttribute('disabled');        
        }  else{
            style.setAttribute('disabled', 'true')
        }
    })
}

/*=================== theme light and dark mode ==========================*/
const modelcon = document.querySelector('#mode-icon')
modelcon.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    modelcon.classList.toggle('fa-moon')
    modelcon.classList.toggle('fa-sun')
})