import { galleryItems } from './gallery-items.js';
// Change code below this line
// function createGalleryMarkup(items) {
//     return items
//       .map(
//         ({ preview, original, description }) =>
//           `<li class="gallery__item">
//              <a class="gallery__link" href="${original}">
//                <img class="gallery__image" src="${preview}" alt="${description}" />
//              </a>
//            </li>`
//       )
//       .join('');
//   }
//   const galleryContainer = document.querySelector('.gallery');
//   galleryContainer.innerHTML = createGalleryMarkup(galleryItems);

//   const gallery = new SimpleLightbox('.gallery a', {
//     captionsData: 'alt',
//     captionDelay: 250,
//   });
  
import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

function createGalleryItem(item) {
  const galleryItem = document.createElement('li');
  galleryItem.classList.add('gallery__item');

  const galleryLink = document.createElement('a');
  galleryLink.classList.add('gallery__link');
  galleryLink.setAttribute('href', item.original);

  const galleryImage = document.createElement('img');
  galleryImage.classList.add('gallery__image');
  galleryImage.setAttribute('src', item.preview);
  galleryImage.setAttribute('alt', item.description);

  galleryLink.appendChild(galleryImage);
  galleryItem.appendChild(galleryLink);

  return galleryItem;
}

function renderGalleryItems(items) {
  const galleryItems = items.map(item => createGalleryItem(item));
  galleryContainer.append(...galleryItems);
}

renderGalleryItems(galleryItems);

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250
});
    

console.log(galleryItems);
