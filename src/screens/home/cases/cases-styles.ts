import styled from 'styled-components';

import { devices } from '../../../assets/styles/devices';

export const StyledCases = styled.ul`
  display: grid;
  width: 100%;

  @media ${devices.tablet} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${devices.desktop} {
    grid-template-columns: repeat(3, 1fr);
  }

  @media ${devices.widescreen} {
    grid-template-columns: repeat(4, 1fr);
  }
`;

export const CaseAlert = styled.div`
  width: 100%;
  color: #856404;
  background-color: #fff3cd;
  padding: 3rem 2rem;
  font-weight: 400;
  font-size: 1.6rem;
  margin: 0 auto;
  text-align: center;

  em {
    color: ${(props) => props.theme.colors.primary};
    font-style: normal;
    text-transform: uppercase; 
  }
`;
