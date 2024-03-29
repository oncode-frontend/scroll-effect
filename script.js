const navBar = document.querySelector('.nav-bar')
let lastScrollTop = 0

window.addEventListener('scroll', () => {
    let currentScrollTop = window.scrollY

    if (currentScrollTop > lastScrollTop) {
        navBar.style.top = '-100px'
    } else {
        navBar.style.top = '0px'
    }

    lastScrollTop = currentScrollTop 
})