const count = 10;
const apiKey = 'azDEgfUl7cGcx8ALUFh1hFLFbAvQ8IGwnR29V5lpfXM';
const apiUrl = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

async function getPhotos(url) {
  const response = await fetch(url);
  return await response.json();
}

getPhotos(apiUrl)
  .then((photo) => console.log(photo))
  .catch((err) => console.log(err));
