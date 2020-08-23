import styled from 'styled-components';

import devices from '../../../assets/styles/devices';

export const StyledContainer = styled.form`
  background: ${props => props.theme.color_white};
  padding: 6rem 2rem 8rem;
  width: 100%;
  height: 100%;

  @media ${devices.tablet} {
    padding: 6rem 4rem;
  }

  @media ${devices.tabletLandscape} {
    padding: 8rem 6rem;
  }

  @media ${devices.tabletLandscape} {
    padding: 8rem;
  }
`;
