import styled, { css } from 'styled-components';

import { devices } from '../../../../assets/styles/devices';

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

interface IStyledOverlay {
  background: string;
}

export const StyledOverlay = styled.a<IStyledOverlay>`
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
  padding: 3rem;

  &:hover {
    opacity: 1;
    text-decoration: none;
  }

  ${(props) => props.background === 'primary'
    && css`
      background: ${(props) => props.theme.colors.primary};
    `}

  h2 {
    font-weight: 900;
    font-size: 3rem;
    line-height: 3.2rem;
    color: ${(props) => props.theme.colors.white};
    margin-bottom: 3rem;
    text-align: center;

    @media ${devices.tablet} {
      font-size: 4rem;
      line-height: 4.2rem;
    }

    @media ${devices.widescreen} {
      font-size: 6rem;
      line-height: 6.2rem;
    }
  }
`;

export const ClickMe = styled.div`
  display: flex;

  span {
    margin-left: 0.3rem;
    color: ${(props) => props.theme.colors.white};
    display: flex;
    align-items: flex-end;
    font-size: 1.8rem;
  }
`;
