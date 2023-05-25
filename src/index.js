import './index.css';
import handleLike from './modules/handleLike.js';
import { renderCards, updateLikesCountCallback } from './modules/renderCards.js';
import fetchData from './modules/fetchShows.js';
import toggleMenu from './modules/toggleButton.js';
import { incrementCounter, updateCounter } from './modules/showCounter.js';

const container = document.getElementById('card-container');
const counter = { showsTotal: 0 };
const toggleButton = document.querySelector('.nav-toggle-label');
const navLinks = document.querySelectorAll('.nav-link');

const fetchDataAndRenderCards = async () => {
  const shows = await fetchData();
  const renderPromises = shows.map(async (show) => {
    const card = await renderCards(show);
    container.appendChild(card);
    incrementCounter(counter);
  });
  await Promise.all(renderPromises);
  updateCounter(counter);
};

document.addEventListener('click', async (event) => {
  if (event.target.classList.contains('card-like-button')) {
    const itemId = event.target.getAttribute('data-item-id');
    await handleLike(itemId, updateLikesCountCallback);
  }
});
toggleButton.addEventListener('click', toggleMenu);
navLinks.forEach((navLink) => {
  navLink.addEventListener('click', toggleMenu);
});

fetchDataAndRenderCards();
