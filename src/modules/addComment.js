const addComment = async (data, updateCommentsCallback) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2kCfF1syB4EtsO7lyqfM/comments';

  const requestBody = {
    item_id: data.id,
    username: data.username,
    comment: data.comment,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  if (response.status === 201) {
    await updateCommentsCallback(data.count, requestBody);
  } else {
    // error handling
  }
};

export default addComment;