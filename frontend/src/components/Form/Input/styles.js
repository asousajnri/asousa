import styled from 'styled-components';

export const InputContainer = styled.input`
  display: block;
  min-height: 6rem;
  padding: 0 2rem;
  width: 100%;
  font-size: 2rem;
  font-weight: 300;
  border: 2px solid #000;
  transition: border 0.3s ease-in-out;
  color: ${props => props.theme.colors.text};
  margin-bottom: 2rem;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover,
  &:focus {
    border: 2px solid ${props => props.theme.colors.primary};
  }

  &::placeholder {
    color: ${props => props.theme.colors.text};
  }
`;
