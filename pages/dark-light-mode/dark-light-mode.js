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

  function darkMode() {
    navBar.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');
    setImageMode('dark');
  }

  function lightMode() {
    navBar.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-replace');
    setImageMode('light');
  }

  function setImageMode(color) {
    imageOne.src = `img/undraw_proud_coder_${color}.svg`;
    imageTwo.src = `img/undraw_feeling_proud_${color}.svg`;
    imageThree.src = `img/undraw_conceptual_idea_${color}.svg`;
  }

  // Switch Theme Dynamically
  function switchTheme(e) {
    const toggle = e.target.checked;

    if (toggle) {
      rootElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark');
      darkMode();
    } else {
      rootElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light');
      lightMode();
    }
  }

  toggleSwitch.addEventListener('change', switchTheme);

  // Check Local Storage for Theme Mode
  const currentTheme = localStorage.getItem('theme');

  if (currentTheme) {
    rootElement.setAttribute('data-theme', currentTheme);

    if (currentTheme === 'dark') {
      toggleSwitch.checked = true;
      darkMode();
    }
  }
}
