const handleLike = async (itemId, updateLikesCountCallback) => {
  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2kCfF1syB4EtsO7lyqfM/likes';

  const requestBody = {
    item_id: itemId,
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(requestBody),
  });

  if (response.status === 201) {
    await updateLikesCountCallback(itemId);
  } else {
    // error handling
  }
};

export default handleLike;
