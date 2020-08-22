import styled from 'styled-components';

import devices from '../../../assets/styles/devices';

export const StyledCareerItem = styled.li`
  background: ${props => props.color};
  padding: 6rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 35rem;

  @media ${devices.desktop} {
    height: 50rem;
  }

  @media ${devices.widescreen} {
    height: 60rem;
  }

  @media ${devices.fullhd} {
    height: 70rem;
  }

  img {
    margin-bottom: 2rem;

    @media ${devices.widescreen} {
      width: 20rem;
    }
  }

  h2,
  span {
    color: ${props => props.theme.color_white};
    text-align: center;
  }

  h2 {
    font-size: 2.5rem;

    @media ${devices.desktop} {
      font-size: 3rem;
    }

    @media ${devices.widescreen} {
      font-size: 4rem;
    }
  }

  span {
    font-size: 2rem;
    font-weight: 400;

    @media ${devices.desktop} {
      font-size: 2.5rem;
    }

    @media ${devices.widescreen} {
      font-size: 3.5rem;
    }
  }
`;
