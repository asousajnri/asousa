import { shade } from 'polished';
import styled from 'styled-components';

export const ButtonContainer = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;

  min-height: 6rem;
  width: 100%;
  background: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.textInverter};
  font-weight: bold;
  font-size: 2rem;
  text-transform: uppercase;
  border: 2px solid ${props => shade(0.4, props.theme.colors.primary)};
  cursor: pointer;
  opacity: 0.6;

  transition: opacity 0.3s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;
