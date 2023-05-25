const toggleButton = document.querySelector('#nav-toggle');
const navMenu = document.querySelector('#nav-menu');
const motto = document.querySelector('.motto');

function showMenu() {
  toggleButton.setAttribute('aria-label', 'Close menu');
  navMenu.style.display = 'flex';
  navMenu.setAttribute('data-visible', 'true');
  toggleButton.classList.add('checked');
  motto.classList.add('hidden');
  motto.style.display = 'none';
}

function hideMenu() {
  toggleButton.setAttribute('aria-label', 'Open menu');
  navMenu.style.display = 'none';
  navMenu.setAttribute('data-visible', 'false');
  toggleButton.classList.remove('checked');
  motto.classList.remove('hidden');
  motto.style.display = 'block';
}

function toggleMenu() {
  const visibility = navMenu.getAttribute('data-visible');
  if (visibility === 'true') {
    hideMenu();
    toggleButton.setAttribute('aria-expanded', 'false');
    navMenu.setAttribute('data-visible', 'false');
    navMenu.setAttribute('aria-expanded', 'false');
  } else {
    showMenu();
    toggleButton.setAttribute('aria-expanded', 'true');
    navMenu.setAttribute('data-visible', 'true');
    navMenu.setAttribute('aria-expanded', 'true');
  }
}

export default toggleMenu;
