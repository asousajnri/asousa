import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  background: ${props => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  width: 25%;
`;

export const Title = styled.div`
  display: flex;
  padding: 2.5rem 2rem;
  background: ${props => shade(0.1, props.theme.colors.primary)};

  h2 {
    color: #fff;
    font-size: 3.5rem;
    font-weight: bold;
  }
`;

export const WrapperIcon = styled.i`
  display: block;
  width: 3rem;
  height: 3rem;
  margin-right: 1rem;
`;
