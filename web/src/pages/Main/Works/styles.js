import styled from 'styled-components';

import devices from '../../../styles/devices';

export const WorksContainer = styled.div`
  margin-bottom: 9rem;

  @media ${devices.tabletLandscape} {
    column-gap: 0;
    columns: 2;
  }
`;
