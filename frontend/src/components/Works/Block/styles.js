import styled from "styled-components";

export const BlockContainer = styled.div`
  display: flex;
  position: relative;
`;

export const OverlayHover = styled.div`
  position: absolute;
  z-index: 2;
  background: ${props => props.theme.colors.primary};

  opacity: 0;

  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;

  h3,
  span {
    color: #fff;
  }
`;
