import styled from 'styled-components';

import { devices } from '../../../assets/styles/devices';

export const StyledCareer = styled.ul`
  width: 100%;
  display: grid;

  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.tabletLandscape} {
    grid-template-columns: repeat(3, 1fr);
  }
`;
