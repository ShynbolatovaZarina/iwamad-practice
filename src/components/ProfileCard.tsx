import { useState } from 'react';

type ProfileCardProps = {
  name: string;
  role: string;
  bio: string;
  email: string;
  githubUrl: string;
  avatarUrl?: string; // the ? means optional
};

function ProfileCard({
  name,
  role,
  bio,
  email,
  githubUrl,
  avatarUrl,
}: ProfileCardProps) {
  const [likes, setLikes] = useState(0);

  return (
    <section
      className={`card p-6 rounded-xl${likes > 0 ? ' card--liked' : ''}`}
      id="profile-card"
    >
      {avatarUrl ? (
        <img className="card__avatar" src={avatarUrl} alt={`Photo of ${name}`} />
      ) : (
        <div className="card__avatar card__avatar--placeholder" aria-hidden="true">
          {name.charAt(0)}
        </div>
      )}
      <div className="card__info">
        <h2 className="card__name">{name}</h2>
        <p className="card__role">{role}</p>
        <p className="card__bio">{bio}</p>

        <ul className="card__links gap-2">
          <li>
            <a href={`mailto:${email}`}>Email</a>
          </li>
          <li>
            <a href={githubUrl} target="_blank" rel="noopener">
              GitHub
            </a>
          </li>
        </ul>

        <button
          type="button"
          className={`like-btn${likes > 0 ? ' liked' : ''}`}
          onClick={() => setLikes((prev) => prev + 1)}
        >
          {likes > 0 ? '❤️' : '🤍'} Like ({likes})
        </button>
      </div>
    </section>
  );
}

export default ProfileCard;
