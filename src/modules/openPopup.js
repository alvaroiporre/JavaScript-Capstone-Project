import getItemComments from './getComments.js';
import addComment from './addComment.js';

const updateCommentsCallback = async (commentsCountN, comment) => {
  const commentsCount = document.getElementById('comments-count');
  commentsCount.innerText = `Comments (${commentsCountN + 1})`;

  const listComments = document.getElementById('list-comments');
  listComments.innerHTML += `
      <li class="comment"><b>${new Date().toISOString().split('T')[0]} ${comment.username}</b>: ${comment.comment}</li>
    `;

  document.getElementById('username').value = '';
  document.getElementById('comment').value = '';
};

const openPopup = async (show) => {
  const modal = document.getElementById('modal-container');
  modal.classList.toggle('hide');
  modal.innerHTML = `
  <div class="modal-content">
  <button type="button" class="close-button" id="close-button" aria-label="Close button"></button>
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
  <article class="modal-comments">
    <h2 id="comments-count">Coments ()</h2>
    <ul class="list-comments" id="list-comments">
    </ul>
  </article>
  <article class="modal-form">
    <h2>Add a comment</h2>
    <form class="add-comment" id="add-comment-form">
      <input class="input-comment" type="text" placeholder="Your Name" id="username" require>
      <textarea class="input-comment" placeholder="Your Insights" id="comment" require></textarea>
      <input class="input-comment card-comments" type="submit" value="Comment" id="comment-button">
    <form>
  </article>
  </div>`;

  document.getElementById('close-button').addEventListener('click', () => {
    modal.classList.add('scale-out-hor-right');
    setTimeout(() => {
      modal.classList.toggle('hide');
      modal.classList.remove('scale-out-hor-right');
    }, 700);
  });

  const comments = await getItemComments(show.id);
  const listComments = document.getElementById('list-comments');
  comments.comentsData.forEach((comment) => {
    listComments.innerHTML += `
      <li class="comment"><b>${comment.creation_date} ${comment.username}:</b> ${comment.comment}</li>
    `;
  });

  const commentsCount = document.getElementById('comments-count');
  commentsCount.innerText = `Comments (${comments.count})`;

  const addCommentForm = document.getElementById('add-comment-form');
  addCommentForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const usernameInput = document.getElementById('username').value;
    const commentInput = document.getElementById('comment').value;
    await addComment(show.id, usernameInput, commentInput, comments.count, updateCommentsCallback);
  });
};

export default openPopup;
