const toggleBtn = document.querySelector('.theme-toggle')
toggleBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode')
    if ('.theme-toggle' == 'dark-mode'){
        document.body.classList.toggle('dark-mode')
    } else {
        document.body.classList.toggle('grey-mode')
    }
});  

