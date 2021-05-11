import VoiceRSS from './text-to-speech';
const button = document.getElementById('joke-button');
const audioElement = document.getElementById('joke-audio');
const jokeBox = document.querySelector('.joke-container__text-box');
const jokeText = document.getElementById('joke-text');
let isActive = true;

// VoiceRSS Speech Function
function tellVoiceJoke(joke) {
  const jokeString = joke.trim().replace(/ /g, '%20');

  // VoiceRSS Speech Parameters
  VoiceRSS(audioElement).speech({
    // Normally, don't write out API Keys like this, but an exception made here because it's free.
    key: 'e985f868e96c46d9b0789c3855350152',
    src: jokeString,
    hl: 'en-us',
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false,
  });
}

function tellVoiceText(joke) {
  const paragraph = document.createElement('p');

  paragraph.textContent = joke;

  jokeText.appendChild(paragraph);
}

// Get jokes from Joke API
async function getJokes() {
  let jokeMessage = '';
  const apiUrl =
    'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit';
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    // Assign One or Two Part Joke
    if (data.setup) {
      jokeMessage = `${data.setup} ... ${data.delivery}`;
    } else {
      jokeMessage = data.joke;
    }

    // Reset to get new Text
    resetText(jokeMessage);

    // Passing joke to Textbox from voiceRSS API
    tellVoiceText(jokeMessage);

    // Passing Joke Voice from VoiceRSS API
    tellVoiceJoke(jokeMessage);

    enableTextBox();

    // Disable Button
    toggleButton();
  } catch (error) {
    // Catch Error Here
    console.log(error);
  }
}

function resetText(jokeMessage) {
  if (jokeMessage) jokeText.textContent = '';
}

function enableTextBox() {
  jokeBox.hidden = false;
}

function disableTextBox() {
  jokeBox.hidden = true;
}

// Disable button clicking on the joke
// re-enable when the joke has finished
function toggleButton() {
  button.disabled = !button.disabled;
}

button.addEventListener('click', getJokes);
audioElement.addEventListener('ended', toggleButton);
