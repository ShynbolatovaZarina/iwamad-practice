import SkillBadge from '../components/SkillBadge';
import type { Skill } from '../types';

const skills: Skill[] = [
  { id: 1, label: 'HTML' },
  { id: 2, label: 'CSS' },
  { id: 3, label: 'JavaScript' },
  { id: 4, label: 'React' },
  { id: 5, label: 'TypeScript' },
  { id: 6, label: 'Git' },
];

function SkillsPage() {
  return (
    <section className="page">
      <h2 className="page__title">Skills</h2>
      {skills.length > 0 ? (
        <ul className="skills">
          {skills.map((skill) => (
            <SkillBadge key={skill.id} skill={skill} />
          ))}
        </ul>
      ) : (
        <p className="card__empty">No skills added yet.</p>
      )}
    </section>
  );
}

export default SkillsPage;
