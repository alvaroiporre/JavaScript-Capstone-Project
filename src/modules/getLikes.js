const getItemLikesCount = async (itemId) => {
  const url = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/2kCfF1syB4EtsO7lyqfM/likes`;
  const response = await fetch(url);
  const likesData = await response.json();

  const itemLikes = likesData.find((item) => item.item_id === itemId);

  if (itemLikes) {
    const likesCount = itemLikes.likes;
    console.log(`Likes count for item ${itemId}: ${likesCount}`);
    return likesCount;
  } else {
    console.log(`No likes found for item ${itemId}`);
    return 0;
  }
};

export default getItemLikesCount;
