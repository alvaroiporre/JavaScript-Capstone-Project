const renderCards = (show) => {
  const card = document.createElement('div');
  card.classList.add('card');

  const image = createImage(show.image.original);
  const title = createTitle(show.name);
  //const likes = createLikes(show.likes); for the next request
  const comments = createComments();

  card.appendChild(image);
  card.appendChild(title);
  //card.appendChild(likes);
  card.appendChild(comments);

  return card;
};

const createImage = (imageUrl) => {
  const image = document.createElement('img');
  image.classList.add('card-image');
  image.src = imageUrl;
  return image;
};

const createTitle = (titleText) => {
  const title = document.createElement('h2');
  title.classList.add('card-title');
  title.innerText = titleText;
  return title;
};
/*
const createLikes = (likeCount) => {
  const likes = document.createElement('div');
  likes.classList.add('card-likes');

  const heartIcon = document.createElement('i');
  heartIcon.classList.add('card-icon', 'fa', 'fa-heart');

  const likesText = document.createElement('span');
  likesText.innerText = `${likeCount} likes`;

  likes.appendChild(heartIcon);
  likes.appendChild(likesText);

  return likes;
};
*/
const createComments = () => {
  const comments = document.createElement('button');
  comments.classList.add('card-comments');
  comments.innerText = 'Comments';

  comments.addEventListener('click', () => {
    // CODE FOR MODAL WINDOW
  });

  return comments;
};

export { renderCards };
