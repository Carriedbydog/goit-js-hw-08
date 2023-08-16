import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import { galleryItems } from './gallery-items';

// ========================================
const refs = {
  gallery: document.querySelector('.gallery'),
};
// ========================================

const makeGalleryImagesMarkup = ({ preview, original, description }) => {
  return `<li class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</li>`;
};

const makeGalleryImagesGroup = galleryItems
  .map(makeGalleryImagesMarkup)
  .join('');
refs.gallery.insertAdjacentHTML('beforeend', makeGalleryImagesGroup);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
});

// ========================================

refs.gallery.addEventListener('click', onImageClick);

// ========================================

function onImageClick(event) {
  event.preventDefault();
  if (event.target.classList.contains('gallery__image')) {
    const imageSrc = event.target.dataset.source;
    const instance = new SimpleLightbox(`
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
