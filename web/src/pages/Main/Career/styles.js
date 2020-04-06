import styled from 'styled-components';

import devices from '../../../styles/devices';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 9rem;

  @media ${devices.tabletLandscape} {
    flex-direction: row;
  }
`;

export const Side = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${devices.tabletLandscape} {
    width: 50%;
  }
`;
