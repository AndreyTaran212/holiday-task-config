/*
import './styles.scss';
import createPicture from '../../../Picture';

export default function (slide) {
    const sliderContainer = document.createElement('div');
    sliderContainer.classList.add('one-slide');

    const slideImage = createPicture(slide.img, '/assets/user_icon.png', 'sliderPicture', ['photo-person']);

    const textContainer = document.createElement('div');
    textContainer.classList.add('text-container');

    const p = document.createElement('p');
    p.innerText = slide.description;

    sliderContainer.appendChild(slideImage);
    sliderContainer.appendChild(textContainer);
    textContainer.appendChild(p);
    return sliderContainer;
}*/

class Carousel {
    /**
     *
     * @param {Array<string>} imagesPaths
     * @param {number} currentIndex
     */
    constructor(imagesPaths, currentIndex = 0) {
        if (!Array.isArray(imagesPaths) || isNaN(currentIndex)) {
            throw new TypeError();
        }
        if (currentIndex < 0 || currentIndex > imagesPaths.length - 1) {
            throw new RangeError();
        }

        this._imagesPaths = imagesPaths;
        this._currentIndex = currentIndex;

    }

    /**
     *
     * @return {number}
     */
    get currentIndex() {
        return this._currentIndex;
    }

    get prevIndex() {
        return Carousel.getPrevIndex(this.currentIndex, this.length);
    }

    get nextIndex() {
        return Carousel.getNextIndex(this.currentIndex, this.length);
    }

    /**
     *
     * @param {number} value
     */
    set currentIndex(value) {
        if (isNaN(value)) {
            throw new TypeError();
        }
        if (value < 0 || value > this.length - 1) {
            throw new RangeError();
        }
        this._currentIndex = value;
    }

    /**
     *
     * @return {Array<string>}
     */
    get imagesPaths() {
        return this._imagesPaths;
    }

    /**
     *
     * @return {number}
     */
    get length() {
        return this.imagesPaths.length;
    }

    goNext() {
        this.currentIndex = Carousel.getNextIndex(this.currentIndex, this.length);
    }

    goPrev() {
        this.currentIndex = Carousel.getPrevIndex(this.currentIndex, this.length);
    }

    /**
     *
     * @param index - index of current elem
     * @param length - length of iterable collection
     * @return {number}
     */
    static getNextIndex(index, length) {
        return (index + 1) % length;
    }

    static getPrevIndex(index, length) {
        return (index - 1 + length) % length;
    }

}

export default Carousel;