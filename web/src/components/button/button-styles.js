import styled, { css } from 'styled-components';
import { shade } from 'polished';

import devices from '../../assets/styles/devices';

export const StyledButton = styled.button`
  padding: 2rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  background: ${props => props.theme.color_black};
  color: ${props => props.theme.color_white};
  border: none;
  font-size: 2rem;
  cursor: pointer;
  box-shadow: 0 6px
    ${props => shade(0.8, props.theme.color_white)};
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
      ${props => shade(0.9, props.theme.color_white)};
    top: 2px;
  }

  ${props =>
    props.typeColor === 'primary' &&
    css`
      background: ${props => props.theme.primary_color};
      box-shadow: 0 6px
        ${props => shade(0.3, props.theme.primary_color)};

      &:hover {
        box-shadow: 0 4px
          ${props => shade(0.4, props.theme.primary_color)};
        top: 2px;
      }
    `}
  ${props =>
    props.typeColor === 'secondary' &&
    css`
      background: ${props => props.theme.secondary_color};
      box-shadow: 0 6px
        ${props => shade(0.3, props.theme.secondary_color)};

      &:hover {
        box-shadow: 0 4px
          ${props =>
            shade(0.4, props.theme.secondary_color)};
        top: 2px;
      }
    `};
`;
