import styled from 'styled-components';

import devices from '../../../../styles/devices';

export const Container = styled.div`
  width: 100%;
  height: 32rem;
  position: relative;
  vertical-align: top;

  @media ${devices.tabletPortrait} {
    /* height: 64rem; */
  }

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
  border-bottom: 1px solid #ddd;
`;
