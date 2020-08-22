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
  margin-bottom: 3rem;
  width: 100%;

  @media ${devices.tablet_landscape} {
    padding: 0 8rem;
    font-size: 6rem;
    margin-bottom: 4rem;
  }

  @media ${devices.desktop} {
    font-size: 8rem;
    line-height: 8.5rem;
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
