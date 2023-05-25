// eslint-disable-next-line

const updateCounter = (counter) => {
  const counterElement = document.getElementById('nav-counter');
  counterElement.textContent = `(${counter.showsTotal})`;
};

const incrementCounter = (counter) => {
  counter.showsTotal = counter.showsTotal ? counter.showsTotal + 1 : 1;
  updateCounter(counter);
};

export { incrementCounter, updateCounter };
