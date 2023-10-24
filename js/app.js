const iconMenu = document.querySelector('.harmburger')
const menulist = document.querySelector('.navigation__item')

iconMenu.addEventListener('click', () =>{
    iconMenu.classList.toggle('show')
    menulist.classList.toggle('show')
})
//selecting navbar elements
const navItems = document.querySelectorAll('li')

navItems.forEach((item) =>{
    item.addEventListener('click', function(){
        iconMenu.classList.remove('show')
        menulist.classList.remove('show')
    })
})
