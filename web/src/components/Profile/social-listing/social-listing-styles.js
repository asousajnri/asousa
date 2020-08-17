import styled from 'styled-components';

import devices from '../../../assets/styles/devices';

export const StyledSocialListing = styled.ul`
  display: flex;
  justify-content: center;
  width: fit-content;

  @media ${devices.mobile} {
    margin-left: auto;
  }
`;
