import styled, { css } from 'styled-components';

import devices from '../../styles/devices';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem 2rem;
  height: 20rem;
  width: 100%;
  color: #fff;
  position: relative;

  @media ${devices.tabletLandscape} {
    height: 32rem;
  }

  @media ${devices.desktop} {
    padding: 3rem 6rem;
  }

  background: ${props =>
    props.blockColor === 'secundary'
      ? props.theme.colors.secundary
      : props.theme.colors.primary};

  ${props =>
    props.bgGradiente &&
    css`
      &::before {
        content: '';
        display: block;
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        top: 0;
        /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0.1+0,0+30 */
        background: -moz-linear-gradient(
          left,
          rgba(0, 0, 0, 0.1) 0%,
          rgba(0, 0, 0, 0) 30%,
          rgba(0, 0, 0, 0) 100%
        ); /* FF3.6-15 */
        background: -webkit-linear-gradient(
          left,
          rgba(0, 0, 0, 0.1) 0%,
          rgba(0, 0, 0, 0) 30%,
          rgba(0, 0, 0, 0) 100%
        ); /* Chrome10-25,Safari5.1-6 */
        background: linear-gradient(
          to right,
          rgba(0, 0, 0, 0.1) 0%,
          rgba(0, 0, 0, 0) 30%,
          rgba(0, 0, 0, 0) 100%
        ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1a000000', endColorstr='#00000000',GradientType=1 ); /* IE6-9 */
      }
    `}

  h2 {
    text-align: center;
    font-weight: 900;
    font-size: 5rem;
    z-index: 2;
    margin-right: 1rem;
    z-index: 2;

    @media ${devices.tabletPortrait} {
      font-size: 7rem;
    }
  }
`;

export const IconWrapper = styled.i`
  display: block;
  width: 5rem;
  height: 5rem;
  position: absolute;
  z-index: 1;

  @media ${devices.tabletPortrait} {
    width: 6rem;
    height: 6rem;
  }

  ${props =>
    props.targetSection === 'skills' &&
    css`
      top: 20%;
      right: 20%;

      @media ${devices.tabletPortrait} {
        right: 25%;
      }

      @media ${devices.tabletLandscape} {
        right: 15%;
        top: 25%;
      }

      @media ${devices.desktop} {
        right: 25%;
        top: 26%;
      }
    `}

  ${props =>
    props.targetSection === 'works' &&
    css`
      top: 20%;
      right: 15%;

      @media ${devices.tabletPortrait} {
        right: 25%;
      }

      @media ${devices.tabletLandscape} {
        right: 19%;
        top: 26%;
      }

      @media ${devices.desktop} {
        right: 28%;
        top: 26%;
      }
    `}

  ${props =>
    props.targetSection === 'work-experience' &&
    css`
      top: 20%;
      right: 10%;

      @media ${devices.tabletPortrait} {
        right: 20%;
      }

      @media ${devices.tabletLandscape} {
        right: 12%;
        top: 30%;
      }

      @media ${devices.desktop} {
        right: 20%;
        top: 26%;
      }
    `}

  ${props =>
    props.targetSection === 'education' &&
    css`
      top: 20%;
      right: 10%;

      @media ${devices.tabletPortrait} {
        right: 15%;
      }

      @media ${devices.tabletLandscape} {
        right: 8%;
        top: 27%;
      }

      @media ${devices.desktop} {
        right: 20%;
        top: 26%;
      }
    `}

  ${props =>
    props.targetSection === 'contact-us' &&
    css`
      top: 20%;
      right: 10%;

      @media ${devices.desktop} {
        top: 20%;
        right: 15%;
      }
    `}

  @media ${devices.tabletPortrait} {
  }

  @media ${devices.tabletLandscape} {
  }
`;
