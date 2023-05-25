export function adjustCloseBtnPosition() {
  const modalContent = document.querySelector('.modal-content');
  const closeBtn = document.querySelector('.close-button');

  function updateCloseBtnPosition() {
    if (modalContent && modalContent.parentElement) {
      const parentElement = modalContent.parentElement;
      const parentRect = parentElement.getBoundingClientRect();
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const parentTop = parentRect.top + scrollTop;
      closeBtn.style.top = `${parentTop}px`;
      closeBtn.style.left = '10px'; // Adjust the left position as needed
    }
  }

  // Update the close button position on scroll
  window.addEventListener('scroll', updateCloseBtnPosition);

  // Call the function initially to set the initial position
  updateCloseBtnPosition();
}
