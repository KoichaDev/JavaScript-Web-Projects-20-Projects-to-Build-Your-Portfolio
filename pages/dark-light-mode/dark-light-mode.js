const currentSite = window.location.href.split('/').includes('dark-light-mode.html');

if (currentSite) {
  const toggleSwitch = document.getElementById('toggle-dark-light-mode');

  function switchTheme(e) {
    const toggle = e.target.checked;

    // Document.documentElement returns the Element that is the root element of the document (for example, the <html> element for HTML documents).
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement
    if (toggle) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }

  toggleSwitch.addEventListener('change', switchTheme);
}
