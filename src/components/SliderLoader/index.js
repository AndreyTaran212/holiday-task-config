/*
import { appendById, loadJSON } from '../../utils';
import createSlider             from '../Slider';
import loadButton             from '../Slider/components/RadioButtonsLoader';


loadJSON( '/data/carusel.json' )
  .then( (carusel) => {
      if (Array.isArray( carusel )) {
          appendById( 'slider', createSlider( carusel ) );
          appendById('slider', loadButton ( carusel ));
      }
      const slide = document.getElementsByClassName('one-slide');
      const button = document.getElementsByClassName('radioButton');

      let slideIndex = 0;
      showSlides(slideIndex);

      function currentSlide(n) {
          showSlides(slideIndex = n);
      }

      function showSlides(n) {
          let i;
          /!*if (n > slide.length) {
              slideIndex = 1
          }
          if (n < 1) {
              slideIndex = slide.length
          }*!/
          for (i = 0; i < slide.length; i++) {
              slide[i].style.display = 'none';
          }
          slideIndex++;
          if (slideIndex > slide.length) {slideIndex = 1}
          slide[slideIndex - 1].style.display = "block";
          setTimeout(showSlides,10000);

      }
      button.onclick = currentSlide(`button.id`);
  } );*/
