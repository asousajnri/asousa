import styled from 'styled-components';

import devices from '../../assets/styles/devices';

export const StyledCases = styled.ul`
  display: grid;
  width: 100%;

  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${devices.widescreen} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
