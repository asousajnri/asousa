import styled, { css } from 'styled-components';

import devices from "../../../styles/devices";

export const SocialContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const SocialItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background: #d9097c;
  height: 18rem;

  @media ${devices.tabletPortrait} {
    height: 25rem;
  }

  @media ${devices.tabletPortrait} {
    height: 18rem;
  }

  @media ${devices.desktop} {
    height: 25rem;
  }

  ${props => props.changeBg && css`
    background: #c11374;  
  `}
`;
