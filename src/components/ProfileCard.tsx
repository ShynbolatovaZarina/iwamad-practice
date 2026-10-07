import LikeButton from './LikeButton';

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
  return (
    <section className="card p-6 rounded-xl" id="profile-card">
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

        <LikeButton />
      </div>
    </section>
  );
}

export default ProfileCard;
