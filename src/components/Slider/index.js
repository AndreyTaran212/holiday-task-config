import './styles.scss';
import Carousel from './components/Slide';

const CAROUSEL_ID = 'CAROUSEL_ID';

class CarouselController {

    /**
     *
     * @param {string} url
     */
    constructor(url) {
        this._carousel = null;
        this._error = null;
        this._isFetching = false;
        this.nextClick = this.nextClick.bind(this);
        this.loadData(url);
    }

    get isFetching() {
        return this._isFetching;
    }

    set isFetching(value) {
        if (typeof value !== 'boolean') {
            throw new TypeError();
        }
        this._isFetching = value;

        if (value && typeof this.onstart === 'function') {
            this.onstart(new Event('start'));
        }
        if (!value && typeof this.onload === 'function') {
            this.onload(new Event('load'));
        }

    }

    get error() {
        return this._error;
    }

    set error(value) {
        if (value instanceof Error) {
            this._error = value;
            this.isFetching = false;
            if (typeof this.onerror === 'function') {
                this.onerror(new Event('error'));
            }
        } else {
            throw new TypeError();
        }
    }

    loadData = (url) => {
        this.isFetching = true;
        fetch(url)
            .then(response => {
                return response.json();
            })
            .then(data => {
                this._carousel = new Carousel(data);
                this._error = null;
                this.isFetching = false;
            })
            .catch(err => {

                this.error = err;
            });
    };

    nextClick() {

        const prevSlide = document.getElementById(this._carousel.prevIndex);
        const currentSlide = document.getElementById(this._carousel.currentIndex);
        let nextSlide = document.getElementById(this._carousel.nextIndex);

        prevSlide.classList.remove('visibleSlide', 'prevSlide');

        currentSlide.classList.replace('currentSlide', 'prevSlide');

        nextSlide.classList.replace('nextSlide', 'currentSlide');

        this._carousel.goNext();

        nextSlide = document.getElementById(this._carousel.nextIndex);
        nextSlide.classList.add('visibleSlide', 'nextSlide');
    };

    prevClick() {
        let prevSlide = document.getElementById(this._carousel.prevIndex);
        const currentSlide = document.getElementById(this._carousel.currentIndex);
        const nextSlide = document.getElementById(this._carousel.nextIndex);

        prevSlide.classList.replace('prevSlide', 'currentSlide');

        currentSlide.classList.replace('currentSlide', 'nextSlide');

        nextSlide.classList.remove('visibleSlide', 'nextSlide');

        this._carousel.goPrev();

        prevSlide = document.getElementById(this._carousel.prevIndex);
        prevSlide.classList.add('visibleSlide', 'prevSlide');

    };

    renderButton() {

        const button = document.createElement('div');
        button.classList.add('button');
        button.appendChild(#
        #
        #
        #
        #
        #
        #
        #
    )
        ;
        return button;

    }

    renderSlide(src, index) {
        const slideImg = new Image();
        slideImg.src = src;

        const slideElem = document.createElement('div');
        slideElem.classList.add('slide');

        if (index === this._carousel.currentIndex) {
            slideElem.classList.add('visibleSlide', 'currentSlide');
        }

        slideElem.setAttribute('id', index);
        slideElem.appendChild(slideImg);
        return slideElem;
    }

    renderSliderContainer() {
        const sliderContainer = document.createElement('div');
        sliderContainer.classList.add('slidesContainer');

        if (this.isFetching) {

        } else {
            this._carousel.imagesPaths.forEach((value, index) => {
                sliderContainer.appendChild(this.renderSlide(value, index));
            });
        }

        return sliderContainer;
    }

    render() {

        const prevButton = this.renderButton();
        prevButton.setAttribute('alt', '<<');
        prevButton.onclick = this.prevClick;

        const nextButton = this.renderButton();
        nextButton.setAttribute('alt', '>>');
        nextButton.style.transform = 'rotate(180deg)';
        nextButton.style.transformOrigin = 'center';
        nextButton.onclick = this.nextClick;

        const wrapper = document.createElement('div');
        wrapper.classList.add('carouselWrapper');
        wrapper.appendChild(prevButton);
        wrapper.appendChild(this.renderSliderContainer());
        wrapper.appendChild(nextButton);

        return wrapper;
    }

}

const carousel = new CarouselController('./images.json');

renderCarousel();
carousel.onstart = (e) => {
    renderCarousel();
};

carousel.onload = (e) => {
    renderCarousel();
};

carousel.onerror = (e) => {
    renderCarousel();
};

function renderCarousel() {
    let carouselElem = document.getElementById(CAROUSEL_ID);
    if (carouselElem) {
        const newCarouselElem = carousel.render();
        newCarouselElem.setAttribute('id', CAROUSEL_ID);
        document.body.replaceChild(newCarouselElem, carouselElem);
    } else {
        carouselElem = carousel.render();
        carouselElem.setAttribute('id', CAROUSEL_ID);
        document.body.appendChild(carouselElem);
    }
}

