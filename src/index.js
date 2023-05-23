import './index.css';

const title = window.document.getElementById('tv-show-title');

let data = [];

await fetch('https://api.tvmaze.com/shows')
  .then((response) => response.json())
  .then((json) => {
    data = json;
  });

title.innerText = data[0].name;