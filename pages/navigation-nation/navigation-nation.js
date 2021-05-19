const currentSite = window.location.href.split('/').includes('navigation-nation.html');
const lastURLParameter = window.location.href.split('/');
lastURLParameter[lastURLParameter.length - 1];

if (currentSite || lastURLParameter) {
  const menuBars = document.getElementById('menu-bars');
  const overlay = document.getElementById('overlay');
  const navOne = document.getElementById('nav-1');
  const navTwo = document.getElementById('nav-2');
  const navThree = document.getElementById('nav-3');
  const navFour = document.getElementById('nav-4');
  const navFive = document.getElementById('nav-5');
  const navItems = [navOne, navTwo, navThree, navFour, navFive];

  function toggleNav() {
    // Toggle Menu Bars opened/closed
    toggleClassName(menuBars, 'change');

    // Toggle Menu active
    toggleClassName(overlay, 'overlay-active');

    if (containClassName(overlay, 'overlay-active')) {
      // Animate In - Overlay
      replaceClassNameAnimation(overlay, 'overlay-slide-left', 'overlay-slide-right');

      // Animate In - Nav Items
      setNavAnimationDirection('out', 'in');
    } else {
      // Animate Out - Overlay
      replaceClassNameAnimation(overlay, 'overlay-slide-right', 'overlay-slide-left');

      // Animate Out - Nav Items
      setNavAnimationDirection('in', 'out');
    }
  }

  // Toggling the className for the specific element
  function toggleClassName(element, className) {
    element.classList.toggle(className);
  }

  // Return true or false
  function containClassName(element, className) {
    return element.classList.contains(className);
  }

  // Use the element to exchange class Name
  function replaceClassNameAnimation(element, classNameOne, classNameTwo) {
    return element.classList.replace(classNameOne, classNameTwo);
  }

  // Control Navigation Animation
  function setNavAnimationDirection(directionOne, directionTwo) {
    let increment = 1;
    for (const navItem of navItems) {
      const count = increment++;
      navItem.classList.replace(`slide-${directionOne}-${count}`, `slide-${directionTwo}-${count}`);
    }
  }

  menuBars.addEventListener('click', toggleNav);

  for (navItem of navItems) {
    navItem.addEventListener('click', toggleNav);
  }
}
