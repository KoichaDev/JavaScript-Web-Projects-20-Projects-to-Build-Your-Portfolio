import voiceRSS from './text-to-speech';

const currentSite = window.location.href.split('/').includes('joke-teller.html');

if (currentSite) {
  const audioElement = document.getElementById('joke-audio');
  const audioButton = document.getElementById('joke-button');

  voiceRSS(audioElement).speech({
    key: 'e985f868e96c46d9b0789c3855350152',
    src: 'Hello world',
    hl: 'en-us',
    r: 0,
    c: 'mp3',
    f: '44khz_16bit_stereo',
    ssml: false,
  });
}
