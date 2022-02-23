

let menuCl = document.querySelector('#menuClose')
let menu = document.querySelector('#menu')
let menuContainer = document.querySelector('.menu')
let logo = document.querySelector('#logo1')

menu.addEventListener('click', menuOpen)
menuCl.addEventListener('click', menuClose);

function menuOpen() {
    menuContainer.style.display = 'block'
    menu.style.display ='none'
    menuCl.style.display = 'block'
    logo.style.display = 'none'
}

function menuClose() {
    menuContainer.style.display = 'none'
    menuCl.style.display = 'none'
    menu.style.display ='block'
    logo.style.display = 'block'
}