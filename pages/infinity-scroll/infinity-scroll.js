const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('infinity-loader');

// Maximum count to get image is between 10 - 30
const count = 30;
const apiKey = 'azDEgfUl7cGcx8ALUFh1hFLFbAvQ8IGwnR29V5lpfXM';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

let ready = false;
let imagesLoaded = 0;
// Track of the total iamges so we know when it's done loading everything
let totalImages = 0;
let photosArray = [];

function imageLoaded() {
  // Increment image loaded one after one
  imagesLoaded++;

  if (imagesLoaded === totalImages) {
    ready = true;
    console.log('ready =', ready);
  }
}

function displayPhotos() {
  // We want to reset our imagesLoaded every single time when it's launching photos function
  // If we don't reset it, then the total images just increment from 30, 60, 90 etc. We need to make sure it's always
  // 30
  imagesLoaded = 0;
  totalImages = photosArray.length;
  console.log('Total images', totalImages);

  photosArray.map((photo) => {
    const anchor = document.createElement('a');

    setAttributes(anchor, {
      href: photo.links.html,
      target: '_blank',
    });

    const img = document.createElement('img');

    setAttributes(img, {
      src: photo.urls.regular,
      alt: photo.alt_description,
      title: photo.alt_description,
    });

    img.addEventListener('load', imageLoaded);

    // Put <img> inside  <a>, then put both inside imageContainer Element
    anchor.appendChild(img);
    imageContainer.appendChild(anchor);
  });
}

// Set DOM elements attributes
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}

async function getPhotos() {
  try {
    const response = await fetch(apiUrl);
    photosArray = await response.json();
    displayPhotos();
  } catch (err) {
    console.log(err);
  }
}

window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight + window.scrollY;
  const fullHeightImage = document.body.offsetHeight - 1000;

  if (windowHeight >= fullHeightImage && ready === true) {
    ready = false;
    displayPhotos();
  }
});

getPhotos();
