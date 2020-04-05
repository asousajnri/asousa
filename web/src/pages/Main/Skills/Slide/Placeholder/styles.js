import styled from 'styled-components';

import devices from '../../../../../styles/devices';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem;
  height: 31.5rem;
  width: 100%;

  @media ${devices.tabletLandscape} {
    height: 32rem;
  }

  span {
    height: 4.5rem;
    width: 100%;

    @keyframes placeHolderShimmer {
      0% {
        background-position: -1000px 0;
      }
      100% {
        background-position: 1000px 0;
      }
    }

    animation-duration: 1.5s;
    animation-fill-mode: forwards;
    animation-iteration-count: infinite;
    animation-timing-function: linear;
    animation-name: placeHolderShimmer;
    background: #f6f7f8;
    background: linear-gradient(to right, #eeeeee 8%, #dddddd 18%, #eeeeee 33%);
    background-size: 3000px 300px;
    position: relative;
    border-radius: 1rem;
  }
`;
