import './index.css';
import handleLike from './modules/handleLike.js';
import { renderCards, updateLikesCountCallback } from './modules/renderCards.js';
import fetchData from './modules/fetchShows.js';
import toggleBurger from './modules/navToggle.js';
import { incrementCounter, updateCounter } from './modules/showCounter.js';

const container = document.getElementById('card-container');

const fetchDataAndRenderCards = async () => {
  const shows = await fetchData();
  const renderPromises = shows.map(async (show) => {
    const card = await renderCards(show);
    container.appendChild(card);
    incrementCounter();
  });

  await Promise.all(renderPromises);
  updateCounter();
};

document.addEventListener('click', async (event) => {
  if (event.target.classList.contains('card-like-button')) {
    const itemId = event.target.getAttribute('data-item-id');
    await handleLike(itemId, updateLikesCountCallback);
  }
});

toggleBurger();

fetchDataAndRenderCards();
