import styled from 'styled-components';

import { shade } from 'polished';

import devices from '../../../styles/devices';

export const WrapperContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: ${props => shade(0.1, props.theme.colors.primary)};
  padding: 6rem 2rem 8rem;

  @media ${devices.tabletPortrait} {
    padding: 6rem 6rem 8rem;
  }
`;
