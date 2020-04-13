import styled from 'styled-components';

import devices from '../../../../styles/devices';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #dddada;

  &:last-of-type {
    margin-bottom: 0;
    border-bottom: none;
  }

  @media ${devices.tabletPortrait} {
    flex-direction: row;
  }

  label {
    height: 6rem;
    width: 100%;
    background: #f9f9f9;
    padding: 2.1rem 3rem;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    font-size: 1.8rem;
    font-weight: 500;

    @media ${devices.tabletPortrait} {
      height: 25rem;
      max-width: 25rem;
      border-right: 1px solid #dddada;
    }
  }

  textarea {
    font-size: 1.6rem;
    height: 25rem;
    padding: 3rem;
    width: 100%;
    border: none;
    resize: none;
    color: #333;
  }
`;
