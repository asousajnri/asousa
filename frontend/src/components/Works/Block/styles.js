import styled from "styled-components";

import devices from "../../../styles/devices";

export const BlockContainer = styled.div`
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 100%;
  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    > div {
      opacity: 1;
    }
  }
`;

export const OverlayHover = styled.div`
  position: absolute;
  z-index: 2;
  background: ${props => props.theme.colors.primary};

  opacity: 0;
  transition: opacity 0.4s ease-in-out;

  padding: 3rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  bottom: 0;

  h3,
  span {
    color: #fff;
  }

  h3 {
    @media ${devices.tabletLandscape} {
      font-size: 6rem;
      font-weight: 900;
      letter-spacing: -0.05px;
      margin-bottom: 1rem;
    }
  }

  span {
    font-size: 3rem;
  }
`;
