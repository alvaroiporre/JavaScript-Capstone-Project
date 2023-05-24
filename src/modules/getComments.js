const getItemComments = async (itemId) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2kCfF1syB4EtsO7lyqfM/comments?item_id=${itemId}`;
  const response = await fetch(url);
  const commentsData = await response.json();

  if (commentsData.length > 0) {
    return commentsData;
  }
  return [];
};

export default getItemComments;
