import styled from "styled-components";

import devices from "../../../styles/devices";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  @media ${devices.tabletLandscape} {
    width: 50%;
  }
`;
