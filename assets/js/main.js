window.onscroll = function () { headerScroll() };

let btnMenu = document.getElementById('btnMenu');

const headerScroll = () => {
    let header = document.querySelector('.header');

    if (document.documentElement.scrollTop > 100) {
        header.classList.add('header-scroll');
        console.log("OK");
    } else {
        header.classList.remove('header-scroll');
    }
}

const showMenu = () => {
    let navMCon = document.querySelector('.nav__container');
    navMCon.classList.toggle('nav--display');
}

btnMenu.addEventListener("click", showMenu);