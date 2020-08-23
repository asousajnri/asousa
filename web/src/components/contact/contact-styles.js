import styled from 'styled-components';

import devices from '../../assets/styles/devices';

export const StyledContact = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${devices.tablet} {
    flex-direction: row;
  }
`;

export const StyledHalf = styled.div`
  width: 100%;

  @media ${devices.tablet} {
    width: 50%;
  }
`;

export const StyledBanner = styled.div`
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    fit-content: cover;
  }
`;
