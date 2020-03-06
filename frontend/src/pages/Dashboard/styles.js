import styled from 'styled-components';

import devices, { sizes } from '../../styles/devices';

export const DashBoardContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  max-width: ${sizes.desktop};
  margin: 0 auto;

  @media ${devices.tabletLandscape} {
    position: relative;
    margin: auto;
    border-radius: 3rem;
    flex-direction: row;
  }
`;

export const MainContent = styled.main`
  display: flex;
  flex-direction: column;
`;
