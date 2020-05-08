import { shade } from 'polished';
import styled, { css } from 'styled-components';

import devices from '../../../styles/devices';

export const SocialContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media ${devices.tabletLandscape} {
    height: auto;
    width: 50%;
  }
`;

export const SocialItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  height: 25rem;

  &.Facebook {
    background: #4267b2;
  }

  &.Instagram {
    background: #fd1d1d;
  }

  &.Twitter {
    background: #1da1f2;
  }

  &.Linkedin {
    background: #2867b2;
  }

  @media ${devices.tabletLandscape} {
    width: 50%;
  }

  @media ${devices.tabletLandscape} {
    height: auto;
  }
`;

export const IconWrapper = styled.i`
  display: block;
  width: 4rem;
  height: 4rem;
  z-index: 2;
`;
