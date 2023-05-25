import createElement from './createElement.js';
import handleLike from './handleLike.js';
import getItemLikesCount from './getLikes.js';
import openPopup from './openPopup.js';

const updateLikesCountCallback = async (itemId) => {
  const likesCountElement = document.querySelector(`#likes-count-${itemId}`);
  const likesCount = await getItemLikesCount(itemId);
  likesCountElement.textContent = `${likesCount} likes`;
};

const createLikeButton = (itemId) => {
  const likeButton = createElement('button', { class: 'card-like-button', onclick: () => handleLike(itemId, updateLikesCountCallback) });
  likeButton.innerHTML = '<i class="fa fa-heart"></i>';
  likeButton.setAttribute('aria-label', 'Like');
  return likeButton;
};

const renderCards = async (show) => {
  const card = document.createElement('div');
  card.classList.add('card');
  const imageUrl = window.innerWidth > 1200 ? show.image.original : show.image.medium;
  card.appendChild(createElement('img', { src: imageUrl, class: 'card-image', alt: show.name }));
  const flexContainer = document.createElement('div');
  flexContainer.classList.add('card-top');
  const titleElement = createElement('h2', { textContent: show.name, class: 'card-title' });
  flexContainer.appendChild(titleElement);
  const likesCount = await getItemLikesCount(show.id);
  const likesContainer = createElement('div', { class: 'card-likes' });
  likesContainer.appendChild(createLikeButton(show.id));
  likesContainer.appendChild(createElement('span', { textContent: `${likesCount} likes`, id: `likes-count-${show.id}` }));
  flexContainer.appendChild(likesContainer);
  card.appendChild(flexContainer);
  card.appendChild(createElement('button', { textContent: 'Comments', class: 'card-comments', onclick: () => openPopup(show) }));
  return card;
};

document.addEventListener('click', async (event) => {
  if (event.target.classList.contains('card-like-button')) {
    const itemId = event.target.getAttribute('data-item-id');
    await handleLike(itemId, updateLikesCountCallback);
  }
});

export { updateLikesCountCallback, renderCards };
