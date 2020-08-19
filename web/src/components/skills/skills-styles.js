import styled from 'styled-components';

import devices from '../../assets/styles/devices';

export const StyledSkills = styled.ul`
  width: 100%;

  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.tablet_landscape} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${devices.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }
`;
