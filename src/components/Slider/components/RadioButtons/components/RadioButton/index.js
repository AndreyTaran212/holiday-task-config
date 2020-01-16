/*import './styles.scss';*/
/*document.addEventListener('DOMContentLoaded', function() {
    const slide = document.getElementsByClassName('one-slide');
    const button = document.getElementsByClassName('radioButton');
    let slideIndex = 1;
    showSlides(slideIndex);

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        let slide = document.getElementsByClassName("one-slide");
        if (n > slide.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slide.length
        }
        for (i = 0; i < slide.length; i++) {
            slide[i].classList.remove('visibleSlide');
            slide[i].classList.add('invisibleSlide');
        }
        slideIndex++;
        if (slideIndex > slide.length) {slideIndex = 1}
        slide[slideIndex - 1].classList.add('visibleSlide');
        slide[slideIndex - 1].classList.remove('invisibleSlide');
        setTimeout(showSlides,10000);

    }
}, false);*/
/*
window.onload = function () {
    const slide = document.getElementsByClassName('one-slide');
    const button = document.getElementsByClassName('radioButton');
    let slideIndex = 1;
    showSlides(slideIndex);

    function currentSlide(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        let i;
        if (n > slide.length) {
            slideIndex = 1
        }
        if (n < 1) {
            slideIndex = slide.length
        }
        for (i = 0; i < slide.length; i++) {
            slide[i].classList.remove('visibleSlide');
            slide[i].classList.add('invisibleSlide');
        }
        slideIndex++;
        if (slideIndex > slide.length) {slideIndex = 1}
        slide[slideIndex - 1].classList.add('visibleSlide');
        slide[slideIndex - 1].classList.remove('invisibleSlide');
        setTimeout(showSlides,10000);
    }

};
*/
