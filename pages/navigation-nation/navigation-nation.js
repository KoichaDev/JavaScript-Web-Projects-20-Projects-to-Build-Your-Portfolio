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

      // Animate In - Nav Items
      navOne.classList.remove('slide-out-1');
      navOne.classList.add('slide-in-1');
      navTwo.classList.remove('slide-out-2');
      navTwo.classList.add('slide-in-2');
      navThree.classList.remove('slide-out-3');
      navThree.classList.add('slide-in-3');
      navFour.classList.remove('slide-out-4');
      navFour.classList.add('slide-in-4');
      navFive.classList.remove('slide-out-5');
      navFive.classList.add('slide-in-5');
    } else {
      // Animate Out - Overlay
      overlay.classList.add('overlay-slide-left');
      overlay.classList.remove('overlay-slide-right');

      // Animate Out - Nav Items
      navOne.classList.remove('slide-in-1');
      navOne.classList.add('slide-out-1');
      navTwo.classList.remove('slide-in-2');
      navTwo.classList.add('slide-out-2');
      navThree.classList.remove('slide-in-3');
      navThree.classList.add('slide-out-3');
      navFour.classList.remove('slide-in-4');
      navFour.classList.add('slide-out-4');
      navFive.classList.remove('slide-in-5');
      navFive.classList.add('slide-out-5');
    }
  }

  menuBars.addEventListener('click', toggleNav);
  navOne.addEventListener('click', toggleNav);
  navTwo.addEventListener('click', toggleNav);
  navThree.addEventListener('click', toggleNav);
  navFour.addEventListener('click', toggleNav);
  navFive.addEventListener('click', toggleNav);
}
