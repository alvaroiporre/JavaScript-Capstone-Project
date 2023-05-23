import './index.css';

import { renderCards } from './modules/renderCards.js';
import fetchData from './modules/fetchShows.js';

const container = document.getElementById('card-container');

const fetchDataAndRenderCards = async () => {
  const shows = await fetchData();
  shows.forEach((show) => {
    const card = renderCards(show);
    container.appendChild(card);
  });
};

fetchDataAndRenderCards();
