const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('infinity-loader');

let photos = [];

const count = 10;
const apiKey = 'azDEgfUl7cGcx8ALUFh1hFLFbAvQ8IGwnR29V5lpfXM';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

window.addEventListener('scroll', () => {
  const windowHeight = window.innerHeight + window.scrollY;
  const fullHeightImage = document.body.offsetHeight - 1000;

  if (windowHeight >= fullHeightImage) {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((photo) => {
        photo.map((photo) => {
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

          // Put <img> inside  <a>, then put both inside imageContainer Element

          anchor.appendChild(img);
          imageContainer.appendChild(anchor);
        });
      })
      .catch((err) => console.log(err));
  }
});

// Set DOM elements attributes
function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}
