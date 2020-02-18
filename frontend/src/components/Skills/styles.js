import styled from "styled-components";

import devices from "../../styles/devices";

export const SkillContainer = styled.article`
  display: flex;
  flex-direction: column;

  @media ${devices.tabletLandscape} {
    flex-direction: row;
  }
`;
