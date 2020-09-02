import styled from 'styled-components';

import PlaceholderEffect from '../../../../assets/styles/placeholder-effect';
import { devices } from '../../../../assets/styles/devices';

export const StyledSkills = styled.div`
  width: 100%;

  @media ${devices.tablet} {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    row-gap: 2rem;
  }

  @media ${devices.tabletLandscape} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${devices.desktop} {
    grid-template-columns: repeat(4, 1fr);
  }

  @media ${devices.widescreen} {
    grid-template-columns: repeat(5, 1fr);
  }
`;

export const StyledSkill = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledSkillLogo = styled(PlaceholderEffect)`
  height: 25rem;
  width: 100%;

  @media ${devices.fullhd} {
    height: 30rem;
  }
`;

export const StyledSkillStar = styled(PlaceholderEffect)`
  height: 6rem;
  width: 100%;
`;
