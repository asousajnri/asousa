import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  flex-direction: column;
  background: ${props => props.theme.colorsDashboard.primary};
  overflow: hidden;
  border-radius: 2rem;
`;
