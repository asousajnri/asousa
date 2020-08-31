import styled from 'styled-components';

import PlaceholderEffect from '../../../../assets/styles/placeholder-effect';
import { devices } from '../../../../assets/styles/devices';

export const StyleProfile = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0rem 0rem 4rem;
  width: 100%;

  @media ${devices.mobile} {
    flex-direction: row;
    margin-right: auto;
    padding: 3rem 2rem 4rem;
  }

  @media ${devices.tablet} {
    padding: 4rem;
  }

  @media ${devices.tabletLandscape} {
    padding: 6rem 8rem 8rem;
  }
`;

export const StyledImageProfile = styled(PlaceholderEffect)`
  height: 30rem;
  margin-bottom: 1rem;

  @media ${devices.mobile} {
    margin-bottom: 0;
    margin-right: 1rem;
    height: 15rem;
    width: 15rem;
  }

  @media ${devices.tablet} {
    width: 20rem;
  }

  @media ${devices.tabletLandscape} {
    width: 25rem;
  }
`;

export const StyledInfos = styled(PlaceholderEffect)`
  padding: 4rem 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${devices.mobile} {
    padding: 2rem 3rem;
    width: 28rem;
  }

  @media ${devices.tablet} {
    justify-content: space-between;
    padding: 3rem 5rem;
  }

  @media ${devices.tabletLandscape} {
    padding: 4rem 4.8rem 3.6rem;
    width: 45.5rem;
    align-items: flex-start;
  }
`;
