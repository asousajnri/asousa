import styled from 'styled-components';

import { shade } from 'polished';

import devices from '../../../styles/devices';

export const Container = styled.div`
  h2 {
    padding: 4rem 2rem 3rem 2rem;
    font-size: 3rem;
    text-transform: uppercase;
    font-weight: 900;

    @media ${devices.tabletPortrait} {
      padding: 6rem 3rem 4rem;
    }

    @media ${devices.tabletLandscape} {
      padding: 6rem 3rem 4rem;
      font-size: 6rem;
    }

    @media ${devices.desktop} {
      padding-left: 9rem;
    }
  }
`;

export const CasesList = styled.ul`
  display: flex;
  flex-direction: column;

  @media ${devices.tabletPortrait} {
    flex-direction: row;
    flex-wrap: wrap;
  }

  li {
    width: 100%;
    position: relative;
    cursor: pointer;
    overflow: hidden;

    @media ${devices.tabletPortrait} {
      width: 50%;
    }

    @media ${devices.tabletLandscape} {
      width: 25%;
    }
  }
`;

export const HoverOverlay = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: absolute;
  z-index: 2;
  background: ${props => shade(0.1, props.theme.colors.primary)};
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
  color: #fff;

  &:hover {
    opacity: 1;
  }

  h3 {
    font-weight: 900;
    font-size: 3rem;
    margin-bottom: 1rem;
    line-height: 3rem;
    text-align: center;
  }

  h4 {
  }
`;

export const PlaceholderList = styled.div`
  display: flex;
  flex-direction: column;

  @media ${devices.tabletPortrait} {
    flex-direction: row;
    flex-wrap: wrap;
  }
`;

export const Placeholder = styled.div`
  width: 100%;
  height: 32rem;
  position: relative;
  border-right: 1px solid #ddd;

  @media ${devices.tabletPortrait} {
    width: 50%;
    height: 29.4rem;
  }

  @media ${devices.tabletLandscape} {
    width: 25%;
    height: 22rem;
  }

  @media ${devices.tabletLandscape} {
    height: 31.6rem;
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
