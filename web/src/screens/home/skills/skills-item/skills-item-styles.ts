import styled from 'styled-components';

import { devices } from '../../../../assets/styles/devices';

export const StyledSkillsItem = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const StyledShadowOverlay = styled.div`
  position: absolute;
  z-index: 1;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  opacity: 0.1;

  @media ${devices.tablet} {
    transform: rotate(180deg);

    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0+48,0.53+100 */
    background: -moz-linear-gradient(
      left,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 48%,
      rgba(0, 0, 0, 0.53) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      left,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 48%,
      rgba(0, 0, 0, 0.53) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 48%,
      rgba(0, 0, 0, 0.53) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#87000000',GradientType=1 ); /* IE6-9 */
  }
`;

export const StyledImage = styled.div`
  width: 100%;
  padding: 4rem 3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${props => props.theme.colors.white};
  position: relative;
  z-index: 2;

  @media ${devices.widescreen} {
    padding: 8rem 3rem;
  }
`;

export const StyledStart = styled.ul`
  display: flex;
  justify-content: center;
  padding: 2rem;
  width: 100%;

  @media ${devices.tablet} {
    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0+48,0.53+100 */
    background: -moz-linear-gradient(
      left,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 48%,
      rgba(0, 0, 0, 0.03) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      left,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 48%,
      rgba(0, 0, 0, 0.03) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0) 48%,
      rgba(0, 0, 0, 0.03) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#87000000',GradientType=1 ); /* IE6-9 */
  }

  li + li {
    margin-left: 1rem;
  }
`;
