import React from 'react';

import SkillsItem from './skills-item';

import { StyledSkills } from './skills-styles';

const Skills = () => {
  return (
    <StyledSkills>
      <SkillsItem />
      <SkillsItem />
      <SkillsItem />
      <SkillsItem />
      <SkillsItem />
    </StyledSkills>
  );
};

export default Skills;
