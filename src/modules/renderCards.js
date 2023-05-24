import handleLike from './handleLike.js';
import getItemLikesCount from './getLikes.js';
import getItemComments from './getComments.js';
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

const openModal = async (show, likesCount) => {
  const modal = document.getElementById('modal-container');
  modal.classList.toggle('hide');
  modal.innerHTML =`
  <div class="modal-content">
  <img class="close-button" id="close-button" src="${closeIcon}" alt="close-button"}">
  <img class="modal-image" src="${show.image.original}" alt="modal-image">
  <h2 class="modal-title">${show.name}</h2>
  <article class="show-info">
      <div>
        <p><b>Rating:</b> ${show.rating.average}</p>
        <p><b>Genres:</b> ${show.genres.join(', ')}</p>
      </div>
      <div>
        <p><b>Language:</b> ${show.language}</p>
        <p><b>Premiered:</b> ${show.premiered}</p>
      </div>
  </article>
  <article class="modal-coments">
    <h2 id="comments-count">Coments ()</h2>
    <ul class="list-comments" id="list-comments">
    </ul>
  </article>
  <article>
    <h2>Add a comment</h2>
    <form class="add-comment">
      <input class="input-comment" type="text" placeholder="Your Name" id="username" require>
      <textarea class="input-comment" placeholder="Your Insights" id"comment" require></textarea>
      <input class="input-comment" type="submit" value="Comment" id="comment-button">
    <form>
  </article>
  </div>`;
  
  document.getElementById('close-button').addEventListener('click', () => {
    modal.classList.toggle('hide');
  });

  const comments = await getItemComments(show.id);
  const listComments = document.getElementById('list-comments');
  comments.forEach((comment) => {
    listComments.innerHTML += `
      <li class="comment"><b>${comment.creation_date} ${comment.username}</b>: ${comment.comment}</li>
    `;
  })

  const commentsCount = document.getElementById('comments-count');
  commentsCount.innerText = `Comments (${comments.length})`;
  


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
