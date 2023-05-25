const navToggle = document.querySelector('#nav-toggle');
const motto = document.querySelector('.motto');

function openMenu() {
  navToggle.setAttribute('aria-label', 'Close menu');
  navMenu.setAttribute('data-visible', 'true');
  motto.classList.remove('hidden');
  motto.style.display = 'block';
  navToggle.classList.add('checked');
}

function closeMenu() {
  navToggle.setAttribute('aria-label', 'Open menu');
  navMenu.setAttribute('data-visible', 'false');
  motto.classList.add('hidden');
  motto.style.display = 'none';
  navToggle.classList.remove('checked');
}

function toggleBurger() {
  const visibility = navMenu.getAttribute('data-visible');
  if (visibility === 'true') {
    closeMenu();
    navToggle.setAttribute('aria-expanded', 'false');
    navMenu.setAttribute('data-visible', 'false');
    navMenu.setAttribute('aria-expanded', 'false');
  } else {
    openMenu();
    navToggle.setAttribute('aria-expanded', 'true');
    navMenu.setAttribute('data-visible', 'true');
    navMenu.setAttribute('aria-expanded', 'true');
  }
}

export default toggleBurger;
