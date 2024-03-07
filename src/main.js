const searchForm = document.querySelector('.search-form');
const searchInput = document.querySelector('.search-input');

searchForm.addEventListener('submit', async (event) => {
  event.preventDefault();

  const query = searchInput.value.trim();
  if (query === '') {
    showWarning('Please enter a search query!');
    return;
  }

  showLoader();

  try {
    const images = await pixabayApi.fetchImages(query);
    renderGallery(images);
  } catch (error) {
    handleError(error);
  } finally {
    hideLoader();
  }
});
function renderGallery(images) {
  renderFunctions.renderGallery(images);

  const lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}

function handleError(error) {
  console.error('Error:', error);
  showErrorMessage('An error occurred. Please try again later.');
}

function showLoader() {
  renderFunctions.showLoader();
}

function hideLoader() {
  renderFunctions.hideLoader();
}

function showWarning(message) {
  iziToast.warning({
    title: 'Warning',
    message: message,
  });
}

function showErrorMessage(message) {
  iziToast.error({
    title: 'Error',
    message: message,
  });
}
