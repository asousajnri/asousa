import styled from 'styled-components';

import PlaceholderEffect from '../../../../assets/styles/placeholder-effect';
import { devices } from '../../../../assets/styles/devices';

export const StyledCases = styled.div`
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

export const StyledCase = styled(PlaceholderEffect)`
  height: 42.7rem;

  @media ${devices.widescreen} {
    height: 47.2rem;
  }
`;
