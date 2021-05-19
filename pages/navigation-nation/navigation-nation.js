const currentSite = window.location.href.split('/').includes('navigation-nation.html');

if (currentSite) {
  const menuBars = document.getElementById('menu-bars');
  const overlay = document.getElementById('overlay');
  const navOne = document.getElementById('nav-1');
  const navTwo = document.getElementById('nav-2');
  const navThree = document.getElementById('nav-3');
  const navFour = document.getElementById('nav-4');
  const navFive = document.getElementById('nav-5');

  function toggleNav() {
    // Toggle Menu Bars opened/closed
    menuBars.classList.toggle('change');

    // Toggle Menu active
    overlay.classList.toggle('overlay-active');

    if (overlay.classList.contains('overlay-active')) {
      // Animate In - Overlay
      overlay.classList.add('overlay-slide-right');
      overlay.classList.remove('overlay-slide-left');
    } else {
      // Animate Out - Overlay
      overlay.classList.add('overlay-slide-left');
      overlay.classList.remove('overlay-slide-right');
    }
  }

  menuBars.addEventListener('click', toggleNav);
  navOne.addEventListener('click', toggleNav);
  navTwo.addEventListener('click', toggleNav);
  navThree.addEventListener('click', toggleNav);
  navFour.addEventListener('click', toggleNav);
  navFive.addEventListener('click', toggleNav);
}
