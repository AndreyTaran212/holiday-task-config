'use strict';
const sliderContainer = document.getElementById('slider-container');


fetch('./data/carusel.json')
    .then(response => {
        return response.json();
    })
    .then(data => {
        data.forEach(photo => {
            const slider = document.createElement('div');
            slider.classList.add('one-slide');
            sliderContainer.appendChild(slider);

            const image = new Image();
            image.src = photo.img;
            image.classList.add('photo-person');
            slider.appendChild(image);

            const textContainer = document.createElement('div');
            textContainer.classList.add('text-container');
            slider.appendChild(textContainer);

            const p = document.createElement('p');
            p.innerText = photo.description;
            textContainer.appendChild(p);

            const span = document.createElement('span');
            span.innerText = photo.name;
            textContainer.appendChild(span);

        });
    });
