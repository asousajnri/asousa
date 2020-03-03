import React from 'react';

import BlockTitle from '../../../components/BlockTitle';
import { Skills as SkillIcon } from '../../../components/LayoutIcons';
import Slide from './Slide';
import { SkillContainer } from './styles';

const Skills = () => (
  <SkillContainer>
    <BlockTitle
      targetSection="skills"
      titleText="Skills"
      blockColor="secundary"
      IconTitle={SkillIcon}
    />
    <Slide />
  </SkillContainer>
);

export default Skills;
