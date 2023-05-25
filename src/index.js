import './index.css';
import handleLike from './modules/handleLike.js';
import { renderCards, updateLikesCountCallback } from './modules/renderCards.js';
import fetchData from './modules/fetchShows.js';
import toggleBurger from './modules/navToggle.js';
import { incrementCounter, updateCounter } from './modules/showCounter.js';
import { adjustCloseBtnPosition } from './modules/adjustCloseBtn';

const container = document.getElementById('card-container');
let counter = { showsTotal: 0 };
const navToggle = document.querySelector('.nav-toggle-label');
const navMenu = document.querySelector('.nav-links');

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

navToggle.addEventListener('click', () => {
  const visibility = navMenu.getAttribute('data-visible');
  if (visibility === 'true' && window.innerWidth < 768) {
    toggleBurger();
  }
});

fetchDataAndRenderCards();
adjustCloseBtnPosition();
