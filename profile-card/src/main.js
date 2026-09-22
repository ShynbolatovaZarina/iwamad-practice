import './style.css';

const likeBtn = document.querySelector('#like-btn');
const card = document.querySelector('#profile-card');

likeBtn.addEventListener('click', () => {
  const isLiked = likeBtn.classList.toggle('liked');
  card.classList.toggle('card--liked', isLiked);
  likeBtn.textContent = isLiked ? '❤️ Liked' : '🤍 Like';
});