import styled from 'styled-components';

export const Container = styled.li`
  a {
    display: flex;
    padding: 1.5rem;
    color: #fff;
    text-decoration: none;
    position: relative;

    h2 {
      font-size: 2.5rem;
      font-weight: 400;
    }

    &::before {
      content: '';
      display: block;
      position: absolute;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;

      /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0+58,0.05+100 */
      background: -moz-linear-gradient(
        top,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 58%,
        rgba(0, 0, 0, 0.05) 100%
      ); /* FF3.6-15 */
      background: -webkit-linear-gradient(
        top,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 58%,
        rgba(0, 0, 0, 0.05) 100%
      ); /* Chrome10-25,Safari5.1-6 */
      background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0) 58%,
        rgba(0, 0, 0, 0.05) 100%
      ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
      filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#00000000', endColorstr='#0d000000',GradientType=0 ); /* IE6-9 */
    }
  }
`;

export const WrapperIcon = styled.i`
  display: block;
  width: 2.5rem;
  height: 2.5rem;
  margin-right: 1rem;
  position: relative;
  z-index: 2;
`;
