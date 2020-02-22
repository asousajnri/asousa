import styled, { css } from 'styled-components';

export const SocialContainer = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const SocialItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  background: #d9097c;
  height: 18rem;

  ${props => props.changeBg && css`
    background: #c11374;  
  `}
`;
