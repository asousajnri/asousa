import { shade } from 'polished';
import styled from 'styled-components';

import devices from '../../../styles/devices';

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => shade(0.1, props.theme.colors.primary)};
  padding: 6rem 2rem 8rem;

  @media ${devices.tabletPortrait} {
    padding: 6rem 6rem 8rem;
  }
`;

export const Input = styled.input`
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

export const Textarea = styled(Input)`
  font-family: inherit;
  resize: none;
  height: 18rem;
  padding-top: 3rem;
  margin-bottom: 6rem;

  @media ${devices.tabletLandscape} {
    height: 25rem;
  }
`;

export const Button = styled.button`
  color: #fff;
  border: none;
  width: 100%;
  height: 8rem;
  background: ${props => shade(0.18, props.theme.colors.primary)};
  font-size: 2.5rem;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover {
    background: #fff;
    color: ${props => shade(0.18, props.theme.colors.primary)};
  }
`;
