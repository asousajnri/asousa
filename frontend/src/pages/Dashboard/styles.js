import styled from 'styled-components';

import devices from '../../styles/devices';

export const DashBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;

  @media ${devices.tabletLandscape} {
    flex-direction: row;
  }
`;
