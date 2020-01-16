import createButtons from "../RadioButtons";


/**
 *
 * @param {Array<object>} slides
 * @return
 */

export default function (slides) {

    const dotsContainer = document.createElement('div');
    dotsContainer.classList.add('slider-container');
    slides.forEach(slide => {
        dotsContainer.appendChild(createButtons(slide));
    });


    return dotsContainer;
}