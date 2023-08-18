import { galleryItems } from './gallery-items.js';
// Описаний в документації
import SimpleLightbox from "simplelightbox";
// Додатковий імпорт стилів
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

const galleryImage = document.querySelector(".gallery");

//  створюємо розмітку галереї з preview фото
const markingGalery = galleryItems.map(({ preview, original, description }) => {
    return `
<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>
`}).join("");

// вставляємо розмітку галерєї в DOM
galleryImage.insertAdjacentHTML("afterbegin", markingGalery );


// застосовуємо біліотеку SimpleLightbox на створеній розмітці
var lightbox = new SimpleLightbox('.gallery a', {captionsData: "alt", captionDelay: 250, scrollZoomFactor: 0.05 });

