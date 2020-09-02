import React from 'react';

import { StyledSkills, StyledSkill, StyledSkillLogo, StyledSkillStar } from './skills-loading-styles';

interface ISkills {
  _id: string;
  title: string;
  logo: string;
  level: string;
}

interface Props {
  skills: ISkills[];
}

const SkillsLoading: React.FC<Props> = ({ skills }) => (
  <StyledSkills>
    {skills.map(skill => (
      <StyledSkill key={skill._id}>
        <StyledSkillLogo />
      </StyledSkill>
    ))}
  </StyledSkills>
);

export default SkillsLoading;
