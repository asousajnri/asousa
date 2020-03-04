import styled from 'styled-components';

import devices from '../../../../styles/devices';

export const SlideContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${devices.tabletLandscape} {
    width: 62%;
  }

  .swiper-container {
    width: 100%;
    padding-top: 10.1rem;

    @media ${devices.tabletLandscape} {
      padding-top: unset;
      padding-right: 10rem;
    }

    @media ${devices.desktop} {
      padding-right: 14.7rem;
    }
  }

  .swiper-button-prev,
  .swiper-button-next {
    width: 50%;
    height: 10rem;
    top: 2.2rem;
    opacity: 1 !important;
    color: #fff !important;

    @media ${devices.tabletLandscape} {
      width: 11.2rem;
      height: 50%;
    }

    @media ${devices.desktop} {
      width: 15.4rem;
    }
  }

  .swiper-button-prev {
    left: 0;
    background: #1aa316;

    @media ${devices.tabletLandscape} {
      left: unset;
      right: 0px;
    }
  }

  .swiper-button-next {
    right: 0;
    background: #3da93a;

    @media ${devices.tabletLandscape} {
      right: 0px;
      left: unset;
      top: unset;
      bottom: 0;
    }
  }
`;
