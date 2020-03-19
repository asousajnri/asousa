import styled from 'styled-components';

import devices from '../../../styles/devices';

export const Container = styled.textarea`
  border: none;
  background: transparent;
  width: 100%;
  color: #fff;
  border-bottom: 2px solid #fff;
  font-family: inherit;
  font-size: 2.5rem;
  resize: none;
  height: 18rem;
  padding-top: 3rem;
  margin-bottom: 6rem;

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

  @media ${devices.tabletLandscape} {
    height: 25rem;
  }
`;
