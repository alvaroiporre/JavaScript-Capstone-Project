let showsTotal = 0;

const updateCounter = () => {
  const counterElement = document.getElementById('nav-counter');
  counterElement.textContent = `(${showsTotal})`;
};

const incrementCounter = () => {
  showsTotal += 1;
  updateCounter();
};

export { showsTotal, incrementCounter, updateCounter };
