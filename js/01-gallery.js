import { galleryItems } from './gallery-items.js';
// Change code below this line
// const galleryPic = document.querySelector('.gallery');

// const imageUp = galleryItems
// .map(({preview,original,description}) => 
// `<div class = "gallery__item">
// <a class = "gallery__link" href = "${original}">
// <img class = "gallery__image"
//   src = "${preview}"
//   data-source = "${original}"
//   alt = "${description}"/>
// </a></div>`).join("");

// galleryPic.insertAdjacentHTML('afterbegin', imageUp);
// galleryPic.addEventListener('click', onImagesClick);

// function onImagesClick(event) {
//     event.preventDefault();

//     if (!event.target.classList.contains('gallery__image')) {
//     return;
//  }

//  galleryPic.addEventListener('click', onImagesClick);

// const windowModal = basicLightbox.create(`<div class = "modal">
//  <img src = "${event.target.dataset.source}" width = "800" height = "600">
// </div>`, {
//     onShow: (windowModal) => {
//         window.addEventListener('keydown', onKeyboardClick);
//         console.log('onShow', windowModal);
//     },
//     onClose: (windowModal) => {
//         window.removeEventListener('keydown', onKeyboardClick);
//         console.log('onClose', windowModal);
//     }
// });

// modalPage.show()
// function onKeyboardClick (event) {
// if(event.code === 'Escape') {
//     modalPage.close();
//   };
//  };
// };

const galleryPic = document.querySelector('.gallery');

const imageUp = galleryItems
.map(({preview,original,description}) => 
`<div class = "gallery__item">
<a class = "gallery__link" href = "${original}">
<img class = "gallery__image"
  src = "${preview}"
  data-source = "${original}"
  alt = "${description}"/>
</a></div>`).join("");

galleryPic.insertAdjacentHTML('afterbegin', imageUp);
galleryPic.addEventListener('click', onImagesClick);

function onImagesClick(event) {
    event.preventDefault();

    if (!event.target.classList.contains('gallery__image')) {
    return;
 }

 galleryPic.addEventListener('click', onImagesClick);

const modalPage = basicLightbox.create(`<div class = "modal">
 <img src = "${event.target.dataset.source}" width = "800" height = "600">
</div>`, {
    onShow: (modalPage) => {
        window.addEventListener('keydown', onKeyboardClick);
        console.log('onShow', modalPage);
    },
    onClose: (modalPage) => {
        window.removeEventListener('keydown', onKeyboardClick);
        console.log('onClose', modalPage);
    }
});

modalPage.show()
function onKeyboardClick (event) {
if(event.code === 'Escape') {
    modalPage.close();
  };
 };
};