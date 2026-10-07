import { useLikes } from '../context/LikesContext';

function LikeButton() {
  const { likes, addLike } = useLikes();

  return (
    <button
      type="button"
      className={`like-btn${likes > 0 ? ' liked' : ''}`}
      onClick={addLike}
    >
      {likes > 0 ? '❤️' : '🤍'} Like ({likes})
    </button>
  );
}

export default LikeButton;
