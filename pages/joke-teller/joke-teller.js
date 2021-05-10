import voiceRSS from './text-to-speech';

const currentSite = window.location.href.split('/').includes('joke-teller.html');

if (currentSite) {
  const audioElement = document.getElementById('joke-audio');
  const audioButton = document.getElementById('joke-button');

  // voiceRSS(audioElement).speech({
  //   key: 'e985f868e96c46d9b0789c3855350152',
  //   src: 'Hello world',
  //   hl: 'en-us',
  //   r: 0,
  //   c: 'mp3',
  //   f: '44khz_16bit_stereo',
  //   ssml: false,
  // });

  // GET jokes from API

  async function getJokes() {
    let joke = '';
    const jokeApiUrl =
      'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';

    try {
      const response = await fetch(jokeApiUrl);
      const jokeData = await response.json();

      const { delivery, setup } = jokeData;

      if (jokeData.setup) {
        joke = `${setup} ... ${delivery}`;
      } else {
        joke = joke;
      }

      console.log(joke);
    } catch (err) {
      console.error('getJokes():', err);
    }
  }
  getJokes();
}
