import styled from 'styled-components';

import { devices } from '../../../assets/styles/devices';

export const StyledContact = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${devices.tabletLandscape} {
    flex-direction: row;
  }
`;

export const StyledHalf = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media ${devices.tabletLandscape} {
    width: 50%;
  }
`;

export const StyledBanner = styled.div`
  width: 100%;
  height: 100%;
  padding: 6rem 2rem;
  background: ${(props) => props.theme.colors.black};
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;

  @media ${devices.tablet} {
      padding: 8rem 6rem;
  }

  @media ${devices.tablet} {
    padding: 8rem;
  }

  @media ${devices.fullhd} {
    padding: 8rem 20rem;
  }

  h3 {
    margin-bottom: 2rem;
    font-size: 3rem;
    font-weight: 900;
    color: ${(props) => props.theme.colors.secondary};
    text-align: left;

    @media ${devices.tablet} {
        font-size: 4rem;
    }

    @media ${devices.desktop} {
        font-size: 6rem;
    }
  }

  p {
      font-weight: 300;
      color: ${(props) => props.theme.colors.white};
      margin-bottom: 2rem;
      display: inline-block;

      @media ${devices.tablet} {
          font-size: 1.8rem;
      }

      @media ${devices.desktop} {
          font-size: 2.2rem;
      }
  }

  em {
      font-style: normal;
      display: inline-block;
      color: ${(props) => props.theme.colors.secondary};

      @media ${devices.tablet} {
          font-size: 1.6rem;
      }

      @media ${devices.desktop} {
          font-size: 2.2rem;
      }
  }
`;
