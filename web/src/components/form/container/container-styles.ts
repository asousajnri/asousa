import styled from 'styled-components';

import { devices } from '../../../assets/styles/devices';

interface IStyledContainer {
    onSubmit(): void;
};

export const StyledContainer = styled.form<IStyledContainer>`
  background: ${(props) => props.theme.colors.white};
  padding: 6rem 2rem 8rem;
  width: 100%;
  height: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media ${devices.tablet} {
    padding: 6rem 4rem;
  }

  @media ${devices.tabletLandscape} {
    padding: 8rem 6rem;
  }

  @media ${devices.desktop} {
    padding: 8rem;
  }

  @media ${devices.widescreen} {
    padding: 8rem 15rem;
  }
`;
