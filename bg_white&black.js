const toggleBtn = document.querySelector('.theme-toggle')

const darkbtn = 'theme-toggle'
const lightbtn = 'theme-toggle'


toggleBtn.addEventListener('click', () => {
// if (Image.scr.endsWith(lightbtn)){
//     Image.src = darkbtn
// } else {
//     Image.scr = lightbtn
// }

    document.body.classList.toggle('dark-mode')
    if ('.theme-toggle' == 'dark-mode'){
        document.body.classList.toggle('dark-mode')
        Image.src = darkbtn
    } else {
        document.body.classList.toggle('grey-mode')
        Image.scr = lightbtn
    }
});

