import styled from 'styled-components';

import devices from "../../../styles/devices";

export const Container = styled.ul`
  background: #cd127a;
  display: flex;
  flex-direction: column;
  padding: 8rem 2rem;

  @media ${devices.tabletPortrait} {
    padding: 8rem 4rem;
  }
`;

export const Item = styled.li`
  display: flex;
  flex-direction: column;
  margin-bottom: 3.3rem;

  &:last-child {
    margin-bottom: 0;
  }
  
  h3, span {
    color: #fff;
  }

  h3 {
    font-size: 3rem;
    font-weight: 900;
    margin-bottom: 1.5rem;
  }

  span {
    font-size: 2.3rem;
    color: #e1dddd;
    margin-bottom: 1rem;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;
