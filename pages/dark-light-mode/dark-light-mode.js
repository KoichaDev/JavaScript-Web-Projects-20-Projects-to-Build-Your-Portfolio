const currentSite = window.location.href.split('/').includes('dark-light-mode.html');

if (currentSite) {
  // Document.documentElement returns the Element that is the root element of the document (for example, the <html> element for HTML documents).
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement
  const rootElement = document.documentElement;
  const toggleSwitch = document.getElementById('toggle-dark-light-mode');
  const navBar = document.getElementById('dark-light-nav');
  const toggleIcon = document.getElementById('toggle-icon');
  const imageOne = document.getElementById('image-one');
  const imageTwo = document.getElementById('image-two');
  const imageThree = document.getElementById('image-three');
  const textBox = document.getElementById('text-box');

  function toggleDarkMode(isDark = true) {
    navBar.style.backgroundColor = isDark ? 'rgb(0 0 0 / 50%)' : 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = isDark ? 'rgb(255 255 255 / 50%)' : 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = isDark ? 'Dark Mode' : 'Light Mode';
    isDark
      ? toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon')
      : toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    isDark ? setImageMode('dark') : setImageMode('light');
  }

  function setImageMode(color) {
    if (!color) {
      imageOne.src = `img/undraw_proud_coder_${color}.svg`;
      imageTwo.src = `img/undraw_feeling_proud_${color}.svg`;
      imageThree.src = `img/undraw_conceptual_idea_${color}.svg`;
    }
  }

  // Switch Theme Dynamically
  function switchTheme(e) {
    const toggle = e.target.checked;

    if (toggle) {
      rootElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      toggleDarkMode(true);
    } else {
      rootElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      toggleDarkMode(false);
    }
  }

  toggleSwitch.addEventListener('change', switchTheme);

  // Check Local Storage for Theme Mode
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
    rootElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
      toggleDarkMode(true);
    }
  }
}
