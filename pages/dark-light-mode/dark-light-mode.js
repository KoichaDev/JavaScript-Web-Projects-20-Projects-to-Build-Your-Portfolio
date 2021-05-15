const currentSite = window.location.href.split('/').includes('dark-light-mode.html');

if (currentSite) {
  const toggleSwitch = document.getElementById('toggle-dark-light-mode');

  function switchTheme(e) {
    console.log(e);
  }

  toggleSwitch.addEventListener('change', switchTheme);
}
