import styled from 'styled-components';

export const InputContainer = styled.input`
  border: none;
  background: transparent;
  width: 100%;
  height: 8rem;
  font-size: 2.5rem;
  color: #fff;
  border-bottom: 2px solid #fff;
  margin-bottom: 2rem;

  &::placeholder {
    color: #fff;
  }

  &:hover,
  &:focus {
    outline: none;
    box-align: none;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus {
    -webkit-text-fill-color: white;
    -webkit-box-shadow: none;
    transition: background-color 5000s ease-in-out 0s;
  }
`;
