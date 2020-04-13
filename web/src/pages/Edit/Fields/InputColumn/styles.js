import styled from 'styled-components';

import devices from '../../../../styles/devices';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dddada;

  @media ${devices.tabletLandscape} {
    border-right: 1px solid #dddada;
    border-bottom: none;

    &:last-of-type {
      border-right: none;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
    border-bottom: none;
  }

  label {
    height: 6rem;
    width: 100%;
    border-bottom: 1px solid #dddada;
    padding: 0rem 3rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.8rem;
    font-weight: 500;

    @media ${devices.tabletLandscape} {
      /* border-right: 1px solid #dddada; */
    }
  }

  input {
    height: 6rem;
    padding: 0rem 3rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 1.6rem;
    width: 100%;
    border: none;
    color: #333;

    @media ${devices.tabletLandscape} {
      height: 18.9rem;
      /* border-right: 1px solid #dddada; */

      /* &:last-child {
        border-right: none;
      } */
    }
  }
`;
