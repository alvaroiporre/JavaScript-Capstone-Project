const navMenu = document.querySelector('.nav-links');
const navToggle = document.querySelector('.nav-toggle');

function toggleBurger() {
  const width = window.innerWidth;
  const visibility = navMenu.getAttribute('data-visible');
  const expanded = visibility === 'false' && width < 768;
  navToggle.setAttribute('aria-expanded', expanded);
  navMenu.setAttribute('data-visible', expanded);
  navMenu.setAttribute('aria-expanded', expanded);
}

export default toggleBurger;
