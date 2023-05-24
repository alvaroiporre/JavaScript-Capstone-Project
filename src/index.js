import './index.css';
import handleLike from './modules/handleLike.js';
import { renderCards, updateLikesCountCallback } from './modules/renderCards.js';
import fetchData from './modules/fetchShows.js';
import toggleBurger from './modules/navToggle.js';

const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('#nav-menu');
const logo = document.querySelector('.logo');
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

document.addEventListener('click', async (event) => {
  if (event.target.classList.contains('card-like-button')) {
    const itemId = event.target.getAttribute('data-item-id');
    await handleLike(itemId, updateLikesCountCallback);
  }
});

toggleBurger();

fetchDataAndRenderCards().then(() => {
  updateCounter();
});
