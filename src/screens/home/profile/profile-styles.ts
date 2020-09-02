import styled from 'styled-components';

import { devices } from '../../../assets/styles/devices';

export const StyledProfile = styled.header`
  .FadeIn {
    display: flex;
    flex-direction: column;
    padding: 0rem 0rem 4rem;

    @media ${devices.mobile} {
      flex-direction: row;
      padding: 3rem 2rem 4rem;
    }

    @media ${devices.tablet} {
      padding: 4rem;
    }

    @media ${devices.tabletLandscape} {
      padding: 6rem 8rem 8rem;
    }
  }

  @media ${devices.mobile} {
    margin-right: auto;
  }
`;

export const StyledImageProfile = styled.img`
  @media ${devices.mobile} {
    width: 15rem;
  }

  @media ${devices.tablet} {
    width: 20rem;
  }

  @media ${devices.tabletLandscape} {
    width: 25rem;
  }
`;

export const StyledInfos = styled.div`
  background: ${props => props.theme.profile.info};
  padding: 2rem 2rem 3rem;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${devices.mobile} {
    padding: 2rem 3rem;
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

export const StyledOffice = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;

  h1,
  h2 {
    text-align: center;

    @media ${devices.mobile} {
      text-align: left;
    }
  }

  h1 {
    color: ${props => props.theme.colors.primary};
    font-size: 2.8rem;
    font-weight: 900;

    @media ${devices.tabletLandscape} {
      font-size: 4rem;
    }
  }

  h2 {
    font-weight: 400;
    font-size: 1.6rem;
    color: ${props => props.theme.colors.black};

    @media ${devices.tabletLandscape} {
      font-size: 2rem;
    }
  }
`;
