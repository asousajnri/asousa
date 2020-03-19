import styled from 'styled-components';

import { shade } from 'polished';

export const Container = styled.button`
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
