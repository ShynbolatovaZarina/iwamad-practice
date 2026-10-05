import { useState } from 'react';
import SkillBadge from './SkillBadge';
import type { Skill } from '../types';

type ProfileCardProps = {
  name: string;
  role: string;
  bio: string;
  email: string;
  githubUrl: string;
  skills: Skill[];
  avatarUrl?: string; // the ? means optional
};

function ProfileCard({
  name,
  role,
  bio,
  email,
  githubUrl,
  skills,
  avatarUrl,
}: ProfileCardProps) {
  const [liked, setLiked] = useState(false);

  return (
    <section
      className={`card p-6 rounded-xl${liked ? ' card--liked' : ''}`}
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

        <h3 className="card__section-title">Skills</h3>
        {skills.length > 0 ? (
          <ul className="skills">
            {skills.map((skill) => (
              <SkillBadge key={skill.id} skill={skill} />
            ))}
          </ul>
        ) : (
          <p className="card__empty">No skills added yet.</p>
        )}

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
          className={`like-btn${liked ? ' liked' : ''}`}
          onClick={() => setLiked((prev) => !prev)}
        >
          {liked ? '❤️ Liked' : '🤍 Like'}
        </button>
      </div>
    </section>
  );
}

export default ProfileCard;