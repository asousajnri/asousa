import styled from 'styled-components';

import devices, { sizes } from '../../../../styles/devices';

export const PlaceholderEffect = styled.div`
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
`;

export const Container = styled.div`
  width: 100%;
  max-width: ${sizes.desktop};
  margin: 0 auto;
  display: flex;
  flex-direction: column-reverse;

  @media ${devices.tabletLandscape} {
    flex-direction: row;
  }
`;

export const Infos = styled.div`
  padding: 3rem 2rem;

  @media ${devices.tabletPortrait} {
    padding: 6rem;
  }

  @media ${devices.tabletLandscape} {
    width: 50%;
  }

  @media ${devices.desktop} {
    padding: 9.5rem 9rem 6rem;
  }
`;

export const Title = styled(PlaceholderEffect)`
  width: 100%;
  max-width: 33rem;
  height: 4.9rem;
  margin-bottom: 1.5rem;
`;

export const SubTitle = styled(PlaceholderEffect)`
  height: 1.7rem;
  width: 80%;
  max-width: 17rem;
`;

export const Image = styled(PlaceholderEffect)`
  height: 35rem;
  width: 100%;
  border-radius: 0;

  @media ${devices.tabletPortrait} {
    height: 63rem;
  }

  @media ${devices.tabletLandscape} {
    width: 50%;
  }
`;
