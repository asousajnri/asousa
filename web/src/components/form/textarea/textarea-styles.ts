import styled from 'styled-components';

export const StyledTextarea = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  margin-bottom: 3rem;
  width: 100%;

  label {
    margin-bottom: 1rem;
    color: ${(props) => props.theme.colors.secondary};
  }

  textarea {
    resize: none;
    height: 13rem;
    border-radius: 0.5rem;
    border: 2px solid ${(props) => props.theme.colors.grey};
    padding: 2rem;
  }
`;
