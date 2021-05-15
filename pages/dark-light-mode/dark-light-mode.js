const currentSite = window.location.href.split('/').includes('dark-light-mode.html');

if (currentSite) {
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
    toggleIcon.children[1].classList.remove('fa-sun');
    toggleIcon.children[1].classList.add('fa-moon');
    imageOne.src = 'img/undraw_proud_coder_dark.svg';
    imageTwo.src = 'img/undraw_feeling_proud_dark.svg';
    imageThree.src = 'img/undraw_conceptual_idea_dark.svg';
  }

  function lightMode() {
    navBar.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light Mode';
    toggleIcon.children[1].classList.remove('fa-moon');
    toggleIcon.children[1].classList.add('fa-sun');
    imageOne.src = 'img/undraw_proud_coder_light.svg';
    imageTwo.src = 'img/undraw_feeling_proud_light.svg';
    imageThree.src = 'img/undraw_conceptual_idea_light.svg';
  }

  // Switch Theme Dynamically
  function switchTheme(e) {
    const toggle = e.target.checked;

    // Document.documentElement returns the Element that is the root element of the document (for example, the <html> element for HTML documents).
    // https://developer.mozilla.org/en-US/docs/Web/API/Document/documentElement
    if (toggle) {
      document.documentElement.setAttribute('data-theme', 'dark');
      darkMode();
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      lightMode();
    }
  }

  toggleSwitch.addEventListener('change', switchTheme);
}
