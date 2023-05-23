import './index.css';

import { renderCards } from './modules/renderCards.js';
import fetchData from './modules/fetchShows.js';

const container = document.getElementById('card-container');

const fetchDataAndRenderCards = async () => {
  const shows = await fetchData();
  const renderPromises = shows.map(async (show) => {
    const card = await renderCards(show);
    return card;
  });

  const renderedCards = await Promise.all(renderPromises);
  renderedCards.forEach((card) => {
    container.appendChild(card);
  });
};

fetchDataAndRenderCards();
