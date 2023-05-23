const handleLike = async (item_id) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2kCfF1syB4EtsO7lyqfM/likes`;

  const requestBody = {
    item_id: item_id
  };

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(requestBody)
  });

  if (response.status === 201) {
    console.log(`Liked successfully ${item_id}`)
  } else {
    console.error('Failed to create like');
  }
};

export default handleLike;
