import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

function renderGallery(images) {
  const galleryList = document.querySelector('.gallery');

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
    .map((image) => `
      <li class="gallery-item">
        <a href="${image.largeImageURL}" class="gallery-link">
          <img
            src="${image.webformatURL}"
            alt="${image.tags}"
            class="gallery-image"
          />
        </a>
      </li>
    `)
    .join('');

  galleryList.innerHTML = galleryItems;
}

function showLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.add('visible');
  } else {
    console.error('Loader not found');
  }
}

function hideLoader() {
  const loader = document.querySelector('.loader');
  if (loader) {
    loader.classList.remove('visible');
  } else {
    console.error('Loader not found');
  }
}

function handleError(error) {
  console.error('Error:', error);
  showErrorMessage('An error occurred. Please try again later.');
}

function showErrorMessage(message) {
  iziToast.error({
    title: 'Error',
    message: message,
  });
}

function showWarning(message) {
  iziToast.warning({
    title: 'Warning',
    message: message,
  });
}

export { renderGallery, showLoader, hideLoader, handleError, showWarning };
