import styled from 'styled-components';

import devices from '../../../../styles/devices';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin-bottom: 4rem;

  @media ${devices.tabletPortrait} {
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-start;
  }

  h2 {
    font-weight: 900;
    font-size: 4rem;
    margin-bottom: 3rem;

    @media ${devices.tabletPortrait} {
      margin-bottom: 0;
    }

    @media ${devices.tabletLandscape} {
      font-size: 6rem;
    }
  }
`;
