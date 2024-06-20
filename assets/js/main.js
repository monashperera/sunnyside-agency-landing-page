window.addEventListener("load", () => {
    try {
        let loader = document.getElementById('loaderContainer');
        let showElem = document.querySelectorAll('header, main, footer');

        loader.classList.add('d-none');
        for(let x = 0; x < showElem.length; x++) {
            showElem[x].classList.remove('d-none');
        }
    } catch (error) {
        console.log(error);
    }
});


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