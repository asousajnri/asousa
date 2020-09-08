import React from 'react';

import {
  StyledSkillsItem, StyledImage, StyledShadowOverlay, StyledLevel,
} from './skills-item-styles';

interface Props {
  title: string;
  logo: string;
  level: string;
}

const SkillsItem: React.FC<Props> = ({ title, logo, level }) => (
  <StyledSkillsItem>
    <StyledImage>
      <StyledShadowOverlay />
      <img src={logo} alt="" />
    </StyledImage>
    <StyledLevel>
      {level}
    </StyledLevel>
  </StyledSkillsItem>
);

export default SkillsItem;
