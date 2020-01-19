import { appendById, loadJSON } from '../../utils';
import createSlider             from '../Slider';


loadJSON('/data/carusel.json')
    .then((carusel) => {
        if (Array.isArray(carusel)) {
            appendById('slider', createSlider(carusel));

        }

    });
