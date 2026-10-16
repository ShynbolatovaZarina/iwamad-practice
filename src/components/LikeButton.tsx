import { useLikes } from '../context/LikesContext';
import Button from './ui/Button';

function LikeButton() {
  const { likes, addLike } = useLikes();
  const label = `Like (${likes} ${likes === 1 ? 'like' : 'likes'})`;

  return (
    <Button
      variant={likes > 0 ? 'primary' : 'secondary'}
      aria-label={label}
      onClick={addLike}
    >
      {likes > 0 ? '❤️' : '🤍'} Like ({likes})
    </Button>
  );
}

export default LikeButton;
