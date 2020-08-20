import styled, { css } from 'styled-components';

import devices from '../../../assets/styles/devices';

export const StyledCasesItem = styled.li`
  cursor: pointer;
  position: relative;
  overflow: hidden;
  max-height: 42.7rem;

  @media ${devices.widescreen} {
    max-height: 62.7rem;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const StyledOverlay = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;

  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  opacity: 0;
  transition: 0.5s ease;

  &:hover {
    opacity: 1;
  }

  ${props =>
    props.background === 'primary' &&
    css`
      background: ${props => props.theme.primary_color};
    `}

  h2 {
    font-weight: 900;
    font-size: 3rem;
    color: ${props => props.theme.text_white};
    margin-bottom: 3rem;

    @media ${devices.desktop} {
      font-size: 4rem;
    }
  }
`;

export const ClickMe = styled.div`
  display: flex;

  span {
    margin-left: 0.3rem;
    color: ${props => props.theme.text_white};
    display: flex;
    align-items: flex-end;
    font-size: 1.8rem;
  }
`;
