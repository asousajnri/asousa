import { shade } from 'polished';
import styled from 'styled-components';

import devices from '../../../../styles/devices';

export const ItemContainer = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 100%;
  cursor: pointer;
  overflow: hidden;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const OverlayHover = styled.div`
  position: absolute;
  z-index: 2;
  background: ${props => shade(0.1, props.theme.colors.primary)};

  opacity: 0;
  transition: opacity 0.4s ease-in-out;
  /* transition: transform .3s linear; */

  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  bottom: 0;

  &:hover {
    opacity: 1;
  }

  h3,
  span {
    color: #fff;
    text-align: center;
  }

  h3 {
    font-size: 4rem;
    font-weight: 900;
    letter-spacing: -0.05px;
    margin-bottom: 1rem;

    @media ${devices.tabletPortrait} {
      font-size: 6rem;
    }
  }

  span {
    font-size: 1.8rem;

    @media ${devices.tabletPortrait} {
      font-size: 2.5rem;
    }
  }
`;
