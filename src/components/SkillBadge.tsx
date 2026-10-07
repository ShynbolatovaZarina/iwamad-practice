import type { Skill } from '../types';

type SkillBadgeProps = {
  skill: Skill;
};

function SkillBadge({ skill }: SkillBadgeProps) {
  return <li className="skill-badge">{skill.label}</li>;
}

export default SkillBadge;