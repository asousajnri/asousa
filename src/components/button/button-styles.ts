import styled, { css } from 'styled-components';
import { shade } from 'polished';

import { devices } from '../../assets/styles/devices';

interface IStyledButton {
    typeColor: string;
};

export const StyledButton = styled.button<IStyledButton>`
  padding: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: ${(props) => props.theme.colors.black};
  color: ${(props) => props.theme.colors.white};
  border: none;
  font-size: 2rem;
  cursor: pointer;
  box-shadow: 0 6px
    ${(props) => shade(0.8, props.theme.colors.white)};
  position: relative;
  -webkit-transition: all 0.3s;
  -moz-transition: all 0.3s;
  transition: all 0.3s;

  @media ${devices.tablet} {
    font-size: 2.5rem;
  }

  &:focus {
    outline: none;
  }

  &:hover {
    box-shadow: 0 4px
      ${(props) => shade(0.9, props.theme.colors.white)};
    top: 2px;
  }

  ${(props) => props.typeColor === 'primary'
    && css`
      background: ${(props) => props.theme.colors.primary};
      box-shadow: 0 6px
        ${(props) => shade(0.3, props.theme.colors.primary)};

      &:hover {
        box-shadow: 0 4px
          ${(props) => shade(0.4, props.theme.colors.primary)};
        top: 2px;
      }
    `}
  ${(props) => props.typeColor === 'secondary'
    && css`
      background: ${(props) => props.theme.colors.secondary};
      box-shadow: 0 6px
        ${(props) => shade(0.3, props.theme.colors.secondary)};

      &:hover {
        box-shadow: 0 4px
          ${(props) => shade(0.4, props.theme.colors.secondary)};
        top: 2px;
      }
    `};
`;
