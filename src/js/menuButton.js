'use strict';
const mobileNav = document.getElementById('mobile-nav');
const menuBtn = document.getElementById('menuBtn');
let menuIsOpen = false;

menuBtn.onclick = function () {
    toggleMenu();
};

mobileNav.addEventListener('click', (e) => {
    toggleMenu();
});

function toggleMenu() {
    if (!menuIsOpen) {
        menuIsOpen = true;
        mobileNav.classList.add('navigation-open');
        menuBtn.classList.add('buttonTransform');
    } else {
        menuIsOpen = false;
        mobileNav.classList.remove('navigation-open');
        menuBtn.classList.remove('buttonTransform');
    }
}