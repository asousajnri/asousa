import styled from 'styled-components';

import devices from '../../assets/styles/devices';

export const StyledProfile = styled.header`
  display: flex;
  flex-direction: column;
  padding: 4rem 2rem;

  @media ${devices.mobile} {
    flex-direction: row;
  }

  @media ${devices.tablet} {
    margin-right: auto;
    padding: 4rem;
  }

  @media ${devices.tablet_landscape} {
    padding: 6rem 8rem 8rem;
  }
`;

export const StyledImageProfile = styled.img`
  @media ${devices.mobile} {
    width: 15rem;
  }

  @media ${devices.tablet} {
    width: 20rem;
  }

  @media ${devices.tablet_landscape} {
    width: 25rem;
  }
`;

export const StyledInfos = styled.div`
  background: ${props =>
    props.theme.background_profile_info};
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media ${devices.tablet} {
    justify-content: space-between;
    padding: 3rem 4rem;
  }

  @media ${devices.tablet_landscape} {
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
    color: ${props => props.theme.secondary_color};
    font-size: 2.8rem;
    font-weight: 900;

    @media ${devices.tablet_landscape} {
      font-size: 4rem;
    }
  }

  h2 {
    font-weight: 400;
    font-size: 1.6rem;
    color: ${props => props.theme.text_dark};

    @media ${devices.tablet_landscape} {
      font-size: 2rem;
    }
  }
`;
