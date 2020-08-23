import React from 'react';

import defaultTheme from '../../../assets/styles/themes/default';

import MyIcons from '../../icons';

import {
  StyledSkillsItem,
  StyledImage,
  StyledShadowOverlay,
  StyledStart,
} from './skills-item-styles';

const SkillsItem = ({ url }) => (
  <StyledSkillsItem>
    <StyledImage>
      <StyledShadowOverlay />
      <img src="https://place-hold.it/150x150" alt="" />
    </StyledImage>
    <StyledStart>
      <li>
        <MyIcons.Star
          width="3rem"
          fill={defaultTheme.secondary_color}
        />
      </li>
      <li>
        <MyIcons.Star
          width="3rem"
          fill={defaultTheme.secondary_color}
        />
      </li>
      <li>
        <MyIcons.Star
          width="3rem"
          fill={defaultTheme.secondary_color}
        />
      </li>
      <li>
        <MyIcons.Star
          width="3rem"
          fill={defaultTheme.secondary_color}
        />
      </li>
      <li>
        <MyIcons.Star
          width="3rem"
          fill={defaultTheme.secondary_color}
        />
      </li>
    </StyledStart>
  </StyledSkillsItem>
);

export default SkillsItem;
