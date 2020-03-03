import styled from 'styled-components';

import devices from '../../styles/devices';

export const LoginContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 8rem 3rem;
  margin: auto;
  max-width: 40rem;
  width: 100%;
  background: #fff;

  @media ${devices.tabletPortrait} {
    padding: 6rem;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.13);
  }
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: 25rem;
  height: 25rem;
  filter: grayscale(1);
  margin-bottom: 2rem;
`;

export const Title = styled.h1`
  font-size: 3rem;
  margin-bottom: 5rem;
`;

export const GoBack = styled.span`
  margin-top: 2rem;
`;
