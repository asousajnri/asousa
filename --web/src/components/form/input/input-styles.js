import styled from 'styled-components';

import devices from '../../../assets/styles/devices';

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;

  & + & {
    margin-top: 2rem;
  }

  label {
    margin-bottom: 1rem;
    color: ${props => props.theme.secondary_color};
  }

  input {
    height: 4.5rem;
    border-radius: 0.5rem;
    border: 2px solid ${props => props.theme.color_grey};
    padding: 0 2rem;
  }
`;
