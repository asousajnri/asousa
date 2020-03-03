import React from 'react';

import BlockTitleIcon from '../../../components/BlockTitleIcon';
import { Skills as SkillIcon } from '../../../components/LayoutIcons';
import Slide from './Slide';
import { SkillContainer } from './styles';

const Skills = () => (
  <SkillContainer>
    <BlockTitleIcon
      targetSection="skills"
      titleText="Skills"
      blockColor="secundary"
      IconTitle={SkillIcon}
    />
    <Slide />
  </SkillContainer>
);

export default Skills;
