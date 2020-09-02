import React, { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { MyIcons } from '../../../../components';

import { StyledSkillsItem, StyledImage, StyledShadowOverlay, StyledStart } from './skills-item-styles';

interface Props {
  title: string;
  logo: string;
  level: string;
}

const SkillsItem: React.FC<Props> = ({ title, logo, level }) => {
  const { colors } = useContext(ThemeContext);

  return (
    <StyledSkillsItem>
      <StyledImage>
        <StyledShadowOverlay />
        <img src="https://place-hold.it/150x150" alt="" />
      </StyledImage>
      <StyledStart>
        <li>
          <MyIcons.Star width="3rem" fill={colors.secondary} />
        </li>
        <li>
          <MyIcons.Star width="3rem" fill={colors.secondary} />
        </li>
        <li>
          <MyIcons.Star width="3rem" fill={colors.secondary} />
        </li>
        <li>
          <MyIcons.Star width="3rem" fill={colors.secondary} />
        </li>
        <li>
          <MyIcons.Star width="3rem" fill={colors.secondary} />
        </li>
      </StyledStart>
    </StyledSkillsItem>
  );
};

export default SkillsItem;
