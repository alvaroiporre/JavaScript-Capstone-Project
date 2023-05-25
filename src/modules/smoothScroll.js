const scrollToShowLink = () => {
  document.addEventListener('DOMContentLoaded', () => {
    const showsLink = document.getElementById('shows-link');

    showsLink.addEventListener('click', (event) => {
      event.preventDefault();

      const targetId = showsLink.querySelector('a').getAttribute('href');
      const targetElement = document.querySelector(targetId);

      if (targetElement) {
        const offsetTop = targetElement.offsetTop - 160;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth',
        });
      }
    });
  });
};

export default scrollToShowLink;
