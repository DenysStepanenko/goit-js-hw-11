import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.querySelector('.loader'); // Додайте елемент лоадера в HTML

const lightbox = new SimpleLightbox('.gallery a');

export function createGallery(images) {
    const markup = images
        .map(
            ({ webformatURL, largeImageURL, tags, likes, views, comments, downloads }) => `
        <li>
          <a href="${largeImageURL}">
            <img src="${webformatURL}" alt="${tags}" />
            <div>
              <p>Likes: ${likes}</p>
              <p>Views: ${views}</p>
              <p>Comments: ${comments}</p>
              <p>Downloads: ${downloads}</p>
            </div>
          </a>
        </li>`
        )
        .join('');
    galleryContainer.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}

export function clearGallery() {
    galleryContainer.innerHTML = '';
}

export function showLoader() {
    loader.classList.add('visible');
}

export function hideLoader() {
    loader.classList.remove('visible');
}