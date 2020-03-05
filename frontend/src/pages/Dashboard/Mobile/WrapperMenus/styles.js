import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #fff;
  position: fixed;
  top: 100vh;
  transition: all 0.5s ease-in-out;
  z-index: 99;

  &.is-active {
    top: 80px;
  }
`;
