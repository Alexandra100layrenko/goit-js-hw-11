import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import * as renderFunctions from './js/render-functions.js';


export default {
  function renderGallery(images) {
    renderGallery(images);
  }
    if (!galleryList) {
      console.error('Gallery list not found');
      return;
    }

    galleryList.innerHTML = '';

    if (images.length === 0) {
      iziToast.info({
        title: 'Info',
        message: 'Sorry, there are no images matching your search query. Please try again!',
      });
      return;
    }

    const galleryItems = images
      .map(
        (image) => `
          <li class="gallery-item">
            <a href="${image.largeImageURL}" class="gallery-link">
              <img
                src="${image.webformatURL}"
                alt="${image.tags}"
                class="gallery-image"
              />
            </a>
          </li>
        `
      )
      .join('');

    galleryList.innerHTML = galleryItems;
  },

  showLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.classList.add('visible');
    } else {
      console.error('Loader not found');
    }
  },

  hideLoader() {
    const loader = document.querySelector('.loader');
    if (loader) {
      loader.classList.remove('visible');
    } else {
      console.error('Loader not found');
    }
  },
};

