import styled from 'styled-components';

import devices from '../../../styles/devices';

export const Container = styled.article`
  display: flex;
  flex-direction: column;

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

export const SkillsList = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50%;
    background: #fff;
    height: 8rem;
    font-weight: bold;
    transition: all 0.3s;
    border: 1px solid #ddd;

    @media ${devices.tabletPortrait} {
      width: 33%;
    }

    @media ${devices.tabletLandscape} {
      width: 25%;
    }

    @media ${devices.desktop} {
      width: 20%;
    }
  }
`;

export const Placeholder = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  div {
    width: 50%;
    height: 8rem;
    border: 1px solid #ddd;

    @media ${devices.tabletPortrait} {
      width: 33%;
    }

    @media ${devices.tabletLandscape} {
      width: 25%;
    }

    @media ${devices.desktop} {
      width: 20%;
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
  }
`;
