import styled from "styled-components";

export const Container = styled.div.attrs({
  className: "swiper-slide"
})`
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 32rem;
  position: relative;
  padding: 3rem;

  &::before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;

    /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#000000+0,000000+100&0.04+1,0+27 */
    background: -moz-linear-gradient(
      left,
      rgba(0, 0, 0, 0.04) 0%,
      rgba(0, 0, 0, 0.04) 1%,
      rgba(0, 0, 0, 0) 27%,
      rgba(0, 0, 0, 0) 100%
    ); /* FF3.6-15 */
    background: -webkit-linear-gradient(
      left,
      rgba(0, 0, 0, 0.04) 0%,
      rgba(0, 0, 0, 0.04) 1%,
      rgba(0, 0, 0, 0) 27%,
      rgba(0, 0, 0, 0) 100%
    ); /* Chrome10-25,Safari5.1-6 */
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0.04) 0%,
      rgba(0, 0, 0, 0.04) 1%,
      rgba(0, 0, 0, 0) 27%,
      rgba(0, 0, 0, 0) 100%
    ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
    filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#0a000000', endColorstr='#00000000',GradientType=1 ); /* IE6-9 */
  }

  span {
    text-align: center;
    position: relative;
    z-index: 1;
    font-size: 4rem;
    font-weight: 900;
  }
`;
