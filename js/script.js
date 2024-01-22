const burgerBtn = document.querySelector('.nav__btn')
const mobileMenu = document.querySelector('.nav__list')
const body = document.querySelector('#body')
const allMenuItems = document.querySelectorAll('.nav__link')

const toggleMobileMenu = () => {
    mobileMenu.classList.toggle('active')
    
    isMobileMenuOpen= mobileMenu.classList.contains('active')

    if(isMobileMenuOpen){
        body.setAttribute('aria-hidden', 'true')
    } else {
        body.setAttribute('aria-hidden', 'false')
    }
}


burgerBtn.addEventListener('click', toggleMobileMenu)
allMenuItems.forEach(link =>
    link.addEventListener('click', toggleMobileMenu))