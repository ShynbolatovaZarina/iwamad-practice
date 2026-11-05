import type { Skill } from '../types';
import Tag from './ui/Tag';

type SkillBadgeProps = {
  skill: Skill;
};

function SkillBadge({ skill }: SkillBadgeProps) {
  return (
    <li>
      <Tag label={skill.label} />
    </li>
  );
}

export default SkillBadge;
