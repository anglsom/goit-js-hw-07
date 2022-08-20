import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryPic = document.querySelector('.gallery');

const imageUp = galleryItems
.map(({preview,original,description}) => 
`<li class = "gallery__item">
<a class = "gallery__link" href = "${original}">
<img class = "gallery__image"
  src = "${preview}"
  data-source = "${original}"
  alt = "${description}"/>
</a></li>`)
    .join("");

galleryPic.insertAdjacentHTML('afterbegin', imageUp);

let lightbox = new SimpleLightbox('.gallery a', { 
    captionsData: 'alt',
    captionDelay: 250,
});

console.log(galleryItems);