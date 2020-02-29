import styled, { css } from 'styled-components';

import { shade } from "polished";

import devices from "../../../styles/devices";

export const SocialContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;

  @media ${devices.tabletLandscape} {
    height: 50%;
  }
`;

export const SocialItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background: ${props => shade(0.10, props.theme.colors.primary)};
  height: 18rem;

  @media ${devices.tabletPortrait} {
    height: 28rem;
  }

  @media ${devices.tabletLandscape} {
    height: 50%;
  }

  ${props => props.changeBg && css`
    background: #c11374;  
  `}
`;
