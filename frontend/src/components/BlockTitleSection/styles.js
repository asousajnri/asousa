import styled from "styled-components";

import devices from "../../styles/devices";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  height: 20rem;
  width: 100%;
  color: #fff;

  @media ${devices.tabletLandscape} {
    height: 32rem;
  }

  background: ${props =>
    props.blockColor === "secundary"
      ? props.theme.colors.secundary
      : props.theme.colors.primary};

  h2 {
    text-align: center;
    font-weight: 900;
    font-size: 5rem;

    @media ${devices.tabletLandscape} {
      font-size: 7rem;
    }
  }
`;
