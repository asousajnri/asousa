import React from 'react';
import { ThemeContext } from 'styled-components';
import { rgba } from 'polished';

import { MyIcons } from '../../../../components';

import { StyledSkillsItem, StyledImage, StyledShadowOverlay, StyledStart } from './skills-item-styles';

interface Props {
  title: string;
  logo: string;
  level: string;
}

const SkillsItem: React.FC<Props> = ({ title, logo, level }) => {
  const { colors } = React.useContext(ThemeContext);
  const [stars] = React.useState([1, 2, 3, 4, 5]);

  return (
    <StyledSkillsItem>
      <StyledImage>
        <StyledShadowOverlay />
        <img src="https://place-hold.it/150x150" alt="" />
      </StyledImage>
      <StyledStart>
        {stars.map(starOrder => {
          if (starOrder <= Number(level)) {
            return (
              <li key={Math.floor(Math.random() * (1 - 100000))}>
                <MyIcons.Star width="3rem" fill={colors.secondary} />
              </li>
            );
          }
          return (
            <li key={Math.floor(Math.random() * (1 - 100000))}>
              <MyIcons.Star width="3rem" fill={rgba(colors.secondary, 0.2)} />
            </li>
          );
        })}
      </StyledStart>
    </StyledSkillsItem>
  );
};

export default SkillsItem;
