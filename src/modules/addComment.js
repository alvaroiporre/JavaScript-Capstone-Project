const addComment = async (itemId, username, comment, commentsCount, updateCommentsCallback) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2kCfF1syB4EtsO7lyqfM/comments';

  const requestBody = {
    item_id: itemId,
    username,
    comment,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  if (response.status === 201) {
    await updateCommentsCallback(commentsCount, requestBody);
  } else {
    // error handling
  }
};

export default addComment;