import styled from 'styled-components';

export const Container = styled.li`
  display: flex;
  cursor: pointer;

  /* Permalink - use to edit and share this gradient: https://colorzilla.com/gradient-editor/#ffffff+0,f4f4f4+100 */
  background: rgb(255, 255, 255); /* Old browsers */
  background: -moz-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(244, 244, 244, 1) 100%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(255, 255, 255, 1) 0%,
    rgba(244, 244, 244, 1) 100%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(244, 244, 244, 1) 100%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#ffffff', endColorstr='#f4f4f4',GradientType=0 ); /* IE6-9 */

  a {
    font-size: 2.5rem;
    color: ${props => props.theme.colors.text};
    text-decoration: none;
    padding: 3rem 2rem;
    display: flex;
    align-items: center;
    width: 100%;
  }
`;

export const WrapperIcon = styled.i`
  width: 3rem;
  height: 3rem;
  display: block;
  margin-right: 1rem;

  &.align-to-right {
    margin-left: auto;
    width: 2rem;
    height: 2rem;
  }
`;
