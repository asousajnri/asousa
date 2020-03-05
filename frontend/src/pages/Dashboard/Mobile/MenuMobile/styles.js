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

  &.is-active {
    top: 80px;
  }
`;

export const WrapperIcons = styled.i`
  width: 3rem;
  height: 3rem;
  display: block;
  margin-right: 1rem;

  &.MenuClose {
    width: 2rem;
    height: 2rem;
  }
`;

export const MenuCloseAction = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  background: #f5f5f5;
`;
