import styled from 'styled-components';

export const StyledInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;

  & + & {
    margin-top: 2rem;
  }

  label {
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.secondary};
  }

  input {
    height: 4.5rem;
    border-radius: 0.5rem;
    border: 2px solid ${(props) => props.theme.colors.grey};
    padding: 0 2rem;
  }
`;
