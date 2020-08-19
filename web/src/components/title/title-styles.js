import styled, { css } from 'styled-components';

import devices from '../../assets/styles/devices';

export const StyledBlockTitle = styled.h2`
  display: block;
  font-weight: 900;
  font-size: 4rem;
  line-height: 4rem;
  text-transform: uppercase;
  text-align: left;
  padding: 0 2rem;
  margin-bottom: 2rem;
  width: 100%;

  @media ${devices.desktop} {
    margin-bottom: 4rem;
    font-size: 8rem;
    line-height: 8.5rem;
    padding: 0 8rem;
  }

  ${props =>
    props.color === 'primary' &&
    css`
      color: ${props.theme.primary_color};
    `}

  ${props =>
    props.color === 'secondary' &&
    css`
      color: ${props.theme.secondary_color};
    `}
`;
