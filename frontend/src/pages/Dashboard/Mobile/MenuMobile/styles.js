import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #fff;
`;

export const Title = styled.h2`
  display: flex;
  align-items: center;
  font-size: 3.5rem;
  padding: 3rem 2rem 1rem;
  font-weight: 900;
  color: ${props => props.theme.colors.text};
`;

export const WrapperIcons = styled.i`
  width: 3rem;
  height: 3rem;
  display: block;
  margin-right: 1rem;
`;
