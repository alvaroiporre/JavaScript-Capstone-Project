import handleLike from './handleLike.js';
import getItemLikesCount from './getLikes.js';

const renderCards = async (show) => {
  const card = document.createElement('div');
  card.classList.add('card');

  card.appendChild(createElement('img', { src: show.image.original, class: 'card-image' }));
  card.appendChild(createElement('h2', { textContent: show.name, class: 'card-title' }));

  const likesCount = await getItemLikesCount(show.id);
  const likesContainer = createElement('div', { class: 'card-likes' });
  likesContainer.appendChild(createLikeButton(show.id));
  likesContainer.appendChild(createElement('span', { textContent: `${likesCount} likes` }));
  card.appendChild(likesContainer);

  card.appendChild(createElement('button', { textContent: 'Comments', class: 'card-comments', onclick: openModal }));

  return card;
};

const createLikeButton = (itemId) => {
  const likeButton = createElement('button', { class: 'card-like-button', onclick: () => handleLike(itemId) });
  likeButton.innerHTML = '<i class="fa fa-heart"></i>';
  return likeButton;
};

const createElement = (tagName, attributes = {}) => {
  const element = document.createElement(tagName);
  Object.entries(attributes).forEach(([key, value]) => {
    if (key === 'textContent') {
      element.textContent = value;
    } else if (key === 'onclick') {
      element.addEventListener('click', value);
    } else {
      element.setAttribute(key, value);
    }
  });
  return element;
};

const openModal = () => {
  // CODE FOR MODAL WINDOW
};

export { renderCards };
