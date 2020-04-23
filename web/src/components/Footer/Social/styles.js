import { shade } from 'polished';
import styled, { css } from 'styled-components';

import devices from '../../../styles/devices';

export const SocialContainer = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media ${devices.tabletLandscape} {
    height: auto;
    width: 50%;
  }
`;

export const SocialItem = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 18rem;
  /* border: 0.3rem solid transparent; */

  transition: background 0.3s ease-in-out;

  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ea178c+0,d1027a+100 */
  background: rgb(234, 23, 140); /* Old browsers */
  background: -moz-linear-gradient(
    left,
    rgba(234, 23, 140, 1) 0%,
    rgba(209, 2, 122, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    left,
    rgba(234, 23, 140, 1) 0%,
    rgba(209, 2, 122, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to right,
    rgba(234, 23, 140, 1) 0%,
    rgba(209, 2, 122, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ea178c', endColorstr='#d1027a',GradientType=1 ); /* IE6-9 */

  &:hover {
    background: #fff;
  }

  @media ${devices.tabletLandscape} {
    width: 50%;
  }

  @media ${devices.tabletLandscape} {
    width: 25%;
    height: 100%;
  }
`;

export const IconWrapper = styled.i`
  display: block;
  width: 4rem;
  height: 4rem;
`;
