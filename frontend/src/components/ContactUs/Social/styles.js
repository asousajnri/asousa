import { shade } from 'polished';
import styled, { css } from 'styled-components';

import devices from '../../../styles/devices';

export const SocialContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media ${devices.tabletLandscape} {
    height: 50%;
  }
`;

export const SocialItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background: ${(props) => shade(0.1, props.theme.colors.primary)};
  height: 18rem;

  transition: background 0.5s ease-in-out;

  &:hover {
    background: #fff;
  }

  @media ${devices.tabletPortrait} {
    height: 28rem;
  }

  @media ${devices.tabletLandscape} {
    height: 50%;
  }

  ${(props) => props.changeBg
    && css`
      background: #c11374;
    `}
`;

export const IconWrapper = styled.i`
  display: block;
  width: 4rem;
  height: 4rem;
`;
