import handleLike from './handleLike.js';
import getItemLikesCount from './getLikes.js';
import closeIcon from '../img/close.png';


const updateLikesCountCallback = async (itemId) => {
  const likesCountElement = document.querySelector(`#likes-count-${itemId}`);
  const likesCount = await getItemLikesCount(itemId);
  likesCountElement.textContent = `${likesCount} likes`;
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

const createLikeButton = (itemId) => {
  const likeButton = createElement('button', { class: 'card-like-button', onclick: () => handleLike(itemId, updateLikesCountCallback) });
  likeButton.innerHTML = '<i class="fa fa-heart"></i>';
  return likeButton;
};

const openModal = (show, likesCount) => {
  const modal = document.getElementById('modal-container');
  modal.classList.toggle('hide');
  modal.innerHTML =`
  <img class="close-button" id="close-button" src="${closeIcon}" alt="close-button"}">
  <img class="modal-image" src="${show.image.original}" alt="modal-image">
  <h2 class="modal-title">${show.name}</h2>
  <article class="show-info">
      <p>Rating: ${show.rating.average}</p>
      <p>Genres: ${show.genres.join(', ')}</p>
      <p>Language: ${show.language}</p>
      <p>Sumary: ${show.summary}</p>
  </article>`;
  document.getElementById('close-button').addEventListener('click', () => {
    modal.classList.toggle('hide');
  });
};

const renderCards = async (show) => {
  const card = document.createElement('div');
  card.classList.add('card');
  const imageUrl = window.innerWidth > 1200 ? show.image.original : show.image.medium;
  card.appendChild(createElement('img', { src: imageUrl, class: 'card-image' }));
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
  card.appendChild(createElement('button', { textContent: 'Comments', class: 'card-comments', onclick:() => openModal(show, likesCount) }));
  return card;
};

document.addEventListener('click', async (event) => {
  if (event.target.classList.contains('card-like-button')) {
    const itemId = event.target.getAttribute('data-item-id');
    await handleLike(itemId, updateLikesCountCallback);
  }
});

export { updateLikesCountCallback, renderCards };
