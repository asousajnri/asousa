import styled from 'styled-components';

import devices from '../../styles/devices';

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  padding-top: 6rem;

  @media ${devices.tabletPortrait} {
    /* padding-top: 6rem; */
  }
`;

export const Contacts = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${devices.tabletLandscape} {
    flex-direction: row;
  }
`;
