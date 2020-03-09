import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`;

export const ToolBar = styled.ul`
  display: flex;
  width: max-content;

  li {
    display: flex;
    margin-right: 2rem;

    &:hover {
      border-bottom: 1px solid #000;
    }

    &:last-child {
      margin-right: 0;
    }
  }

  a {
    text-decoration: none;
    color: #000;
  }
`;

export const WrapperIcon = styled.i`
  width: 1.5rem;
  height: 1.5rem;
  display: block;
  margin-right: 0.5rem;
`;

export const SearchPages = styled.form`
  display: flex;
  width: 100%;
  height: 4rem;
  margin-bottom: 4rem;
`;

export const Input = styled.input`
  border: none;
  border-bottom: 2px solid #000;
  background: transparent;
  font-size: 2rem;
  color: #000;
  width: 100%;
  margin-right: 2rem;

  &::placeholder {
    color: #000;
  }
`;

export const ButtonSearch = styled.button`
  width: 3.5rem;
  height: 3.5rem;
  border: none;
  background: transparent;
`;
