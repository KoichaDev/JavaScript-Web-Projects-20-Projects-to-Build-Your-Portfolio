const currentSite = window.location.href.split('/').includes('quote-generator.html');

if (currentSite) {
  const quoteContainer = document.getElementById('quote-container');
  const quoteText = document.getElementById('quote');
  const authorText = document.getElementById('author');
  const twitterButton = document.getElementById('twitter');
  const quoteButton = document.getElementById('new-quote');
  const loaderSpinner = document.getElementById('loader-spinner');
  let apiQuotes = [];

  function showLoadingSpinner() {
    loaderSpinner.hidden = false;
    quoteContainer.hidden = true;
  }

  function hideLoadingSpinner() {
    quoteContainer.hidden = false;
    loaderSpinner.hidden = true;
  }

  function displayQuote(array) {
    const quote = shuffleArrayIndex(array);

    // Checking total character from words. If it's more than 120, then we want to toggle the class name 'long-quote'
    quote.text.length > 120 && quoteText.classList.toggle('long-quote');

    quoteText.textContent = quote.text;
  }

  function displayAuthor(array) {
    const quote = shuffleArrayIndex(array);
    quote.author ? (authorText.textContent = quote.author) : 'Unknown';
  }

  function generateQuote() {
    showLoadingSpinner();
    displayQuote(apiQuotes);
    displayAuthor(apiQuotes);
  }

  // Picking up random index position from an array
  function shuffleArrayIndex(arr) {
    hideLoadingSpinner();
    return arr[Math.floor(Math.random() * arr.length)];
  }

  async function getQuotes() {
    showLoadingSpinner();
    const apiQuoteUrl = 'https://type.fit/api/quotes';

    try {
      // This will not populated until it has some data fetched from the API
      const response = await fetch(apiQuoteUrl);
      apiQuotes = await response.json();
      generateQuote();
    } catch (err) {
      console.log(err);
    }
  }

  // Share the twitter quote on the twitter platform
  function shareTwitterQuotes() {
    const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText.textContent} - ${authorText.textContent}`;
    window.open(twitterUrl, '_blank');
  }

  // Event Listeners
  quoteButton.addEventListener('click', generateQuote);
  twitterButton.addEventListener('click', shareTwitterQuotes);

  getQuotes();
}
