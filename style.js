document.addEventListener('DOMContentLoaded', () => {
  const likeButtons = document.querySelectorAll('.like-btn');

  likeButtons.forEach((button) => {
    button.addEventListener('click', () => {
      const countSpan = button.querySelector('.like-count');
      let currentLikes = parseInt(countSpan.textContent, 10);

      if (!button.classList.contains('liked')) {
        currentLikes += 1;
        button.classList.add('liked');
        button.style.backgroundColor = '#ff4d4d';
        button.style.color = '#fff';
        button.style.borderColor = '#ff4d4d';
      } else {
        currentLikes -= 1;
        button.classList.remove('liked');
        button.style.backgroundColor = 'transparent';
        button.style.color = '#333';
        button.style.borderColor = '#ddd';
      }

      countSpan.textContent = currentLikes;
    });
  });
});