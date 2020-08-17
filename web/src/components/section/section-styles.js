import styled, { css } from 'styled-components';

import devices from '../../assets/styles/devices';

export const StyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  padding-bottom: 4rem;

  ${props =>
    props.type === 'centered' &&
    css`
      padding: 0 2rem 4rem;
      max-width: 112.4rem;
    `};
`;
