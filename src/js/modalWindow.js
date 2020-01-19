import Swal from 'sweetalert2/dist/sweetalert2.js'

import 'sweetalert2/src/sweetalert2.scss';

const imageContainer = document.getElementsByClassName('photo');
let i = 0;
for (i; i < imageContainer.length; i++) {

    const image = imageContainer[i].querySelector('.modal');
    imageContainer[i].addEventListener('click', function () {
        Swal.fire({
            imageUrl: image.src,
            imageAlt: 'Custom image',
            imageWidth: 650,
            imageHeight: 350,
            width: '90%'
        })
    })

}
