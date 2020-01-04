const scroll = 30;

const header = document.getElementById('header');
window.onscroll = function () {
    if (window.scrollY > scroll &&
        !header.classList.contains('nav-scroll')) {
        header.classList.add('nav-scroll');
    } else if (window.scrollY <= scroll &&
        header.classList.contains('nav-scroll')) {
        header.classList.remove('nav-scroll');
    }
};