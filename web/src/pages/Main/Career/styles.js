import styled from 'styled-components';

import devices from '../../../styles/devices';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  /* margin-bottom: 9rem; */

  h2 {
    padding: 4rem 2rem 3rem 2rem;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 900;

    @media ${devices.tabletPortrait} {
      padding: 6rem 3rem 4rem;
    }

    @media ${devices.tabletLandscape} {
      padding: 6rem 3rem 4rem 9rem;
      font-size: 6rem;
    }
  }
`;

export const InfosContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${devices.tabletLandscape} {
    flex-direction: row;
  }
`;

export const Side = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media ${devices.tabletLandscape} {
    width: 50%;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    min-height: 20rem;
    position: relative;
    background: #fff;
    border-bottom: 1px solid #eaeaea;
    border-right: 1px solid #eaeaea;
  }

  h3 {
    text-transform: uppercase;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    z-index: 2;
    text-align: center;

    @media ${devices.tabletLandscape} {
      font-size: 3rem;
    }
  }

  span {
    font-size: 1.6rem;
    color: #818181;
    z-index: 2;

    @media ${devices.tabletLandscape} {
      font-size: 1.8rem;
    }
  }
`;

export const Placeholder = styled.div`
  width: 100%;
  min-height: 20rem;
  border-bottom: 1px solid #eaeaea;
  border-right: 1px solid #eaeaea;

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
`;
