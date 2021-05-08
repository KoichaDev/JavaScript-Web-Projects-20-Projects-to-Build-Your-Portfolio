const imageContainer = document.getElementById('image-container');
const loader = document.getElementById('infinity-loader');

let photos = [];

const count = 10;
const apiKey = 'azDEgfUl7cGcx8ALUFh1hFLFbAvQ8IGwnR29V5lpfXM';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

fetch(apiUrl)
  .then((res) => res.json())
  .then((photo) => {
    photo.map((photo) => {
      const {
        'photo.links.html': photoLink,
        'photo.urls.regular': photoUrl,
        'photo.alt_description': photoDescription,
      } = photo;

      const anchor = document.createElement('a');

      setAttributes(anchor, {
        href: photo.links.html,
        target: '_blank',
      });

      //create image photo
      const img = document.createElement('img');
      //   img.setAttribute('src', photo.urls.regular);
      //   img.setAttribute('alt', photo.alt_description);
      //   img.setAttribute('title', photo.alt_description);

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

function setAttributes(element, attributes) {
  for (const key in attributes) {
    element.setAttribute(key, attributes[key]);
  }
}
