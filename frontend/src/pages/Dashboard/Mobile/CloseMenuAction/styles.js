import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem 0;
  background: #f5f5f5;
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
