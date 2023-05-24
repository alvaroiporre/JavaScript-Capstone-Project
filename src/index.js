import './index.css';
import handleLike from './modules/handleLike.js';
import { renderCards, updateLikesCountCallback } from './modules/renderCards.js';
import fetchData from './modules/fetchShows.js';
import toggleBurger from './modules/navToggle.js';

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-links');
const container = document.getElementById('card-container');

let showsTotal = 0;

const updateCounter = () => {
  const counterElement = document.getElementById('nav-counter');
  counterElement.textContent = `(${showsTotal})`;
};

const fetchDataAndRenderCards = async () => {
  const shows = await fetchData();
  const renderPromises = shows.map(async (show) => {
    const card = await renderCards(show);
    container.appendChild(card);
    showsTotal += 1;
  });

  await Promise.all(renderPromises);
  updateCounter();
};

navToggle.addEventListener('click', toggleBurger);

document.addEventListener('click', async (event) => {
  if (event.target.classList.contains('card-like-button')) {
    const itemId = event.target.getAttribute('data-item-id');
    await handleLike(itemId, updateLikesCountCallback);
  }
});

document.addEventListener('click', () => {
  const visibility = navMenu.getAttribute('data-visible');
  if (visibility === 'true' && window.innerWidth < 768) {
    toggleBurger();
  }
});

fetchDataAndRenderCards().then(() => {
  updateCounter();
});
