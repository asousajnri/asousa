import styled from 'styled-components';

import { devices } from '../../../assets/styles/devices';

export const StyledContact = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  @media ${devices.tablet} {
    flex-direction: row;
  }
`;

export const StyledHalf = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  @media ${devices.tablet} {
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

  h3 {
    margin-bottom: 2rem;
    font-size: 3rem;
    font-weight: 900;
    color: ${(props) => props.theme.colors.secondary};
    text-align: left;
  }

  p {
      font-weight: 300;
      color: ${(props) => props.theme.colors.white};
      margin-bottom: 2rem;
      display: inline-block;
  }

  em {
      display: inline-block;
      color: ${(props) => props.theme.colors.secondary}
  }
`;
