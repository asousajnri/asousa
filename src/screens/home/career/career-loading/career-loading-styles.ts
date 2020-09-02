import styled from 'styled-components';

import PlaceholderEffect from '../../../../assets/styles/placeholder-effect';
import { devices } from '../../../../assets/styles/devices';

export const StyledCareer = styled.div`
  width: 100%;
  display: grid;

  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.tabletLandscape} {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const StyledCareerItem = styled(PlaceholderEffect)`
  width: 100%;
  height: 35rem;

  @media ${devices.desktop} {
    height: 50rem;
  }

  @media ${devices.widescreen} {
    height: 60rem;
  }

  @media ${devices.fullhd} {
    height: 70rem;
  }
`;
