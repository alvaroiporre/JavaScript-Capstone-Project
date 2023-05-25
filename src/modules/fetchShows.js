const fetchData = async () => {
  const response = await fetch('https://api.tvmaze.com/shows');
  const data = await response.json();
  const shows = data.slice(0, 6);
  return shows;
};

export default fetchData;
