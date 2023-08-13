import * as basicLightbox from 'basiclightbox';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

// ========================================
const refs = {
  gallery: document.querySelector('.gallery'),
  modalClose: document.querySelector('.basicLightbox'),
};
// ========================================
const basicLightbox = require('basiclightbox');

const makeGalleryImagesMarkup = ({ preview, original }) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src=${preview}
      data-source=${original}
      alt="Image description"
    />
  </a>
</li>`;
};

const makeGalleryImagesGroup = galleryItems
  .map(makeGalleryImagesMarkup)
  .join('');
refs.gallery.insertAdjacentHTML('beforeend', makeGalleryImagesGroup);

// ========================================

refs.gallery.addEventListener('click', onImageClick);

// ========================================

function onImageClick(event) {
  event.preventDefault();
  if (event.target.classList.contains('gallery__image')) {
    const imageSrc = event.target.dataset.source;
    const instance = basicLightbox.create(`
    <img src=${imageSrc} width="800" height="600">
`);

    instance.show();
    window.addEventListener('keydown', onModalKeyDown);

    function onModalKeyDown(event) {
      if (event.key === 'Escape') {
        instance.close();
        window.removeEventListener('keydown', onModalKeyDown);
      }
    }
  }
}
