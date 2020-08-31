import styled from 'styled-components';

import PlaceholderEffect from '../../../assets/styles/placeholder-effect';
import { devices } from '../../../assets/styles/devices';

export const StyledSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
`;

export const StyledSectionTitle = styled(PlaceholderEffect)`
  height: 2rem;
  width: 100%;
  max-width: 40rem;
  margin-bottom: 2rem;
  padding: 0 2rem;

  @media ${devices.tabletLandscape} {
    padding: 0 8rem;
    margin-bottom: 4rem;
  }
`;
