import styled from 'styled-components';

import devices, { sizes } from '../../styles/devices';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 4rem 2rem;
`;

export const BoxEdit = styled.div`
  width: 100%;
  max-width: ${sizes.tabletLandscape};
  background: #fff;
  border: 1px solid #dddada;
  margin-bottom: 4rem;

  h2 {
    font-size: 3rem;
    padding: 3rem;
    border-bottom: 1px solid #dddada;
  }
`;

export const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SkillsList = styled.ul`
  display: grid;
  grid-template-columns: 1fr;

  @media ${devices.tabletPortrait} {
    grid-template-columns: 1fr 1fr;
  }

  li {
    padding: 0 3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 6rem;
    width: 100%;
    border-bottom: 1px solid #dddada;

    @media ${devices.tabletPortrait} {
      &:nth-child(odd) {
        border-right: 1px solid #dddada;
      }
    }
  }

  span {
    font-size: 1.6rem;
    color: #333;
  }

  button {
    border: 2px solid #dddada;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #dddada;
    font-weight: bold;
    background: none;
    height: 3rem;
    padding: 0 1rem;
    font-weight: bold;
    cursor: pointer;

    transition: all 0.3s;

    &:hover {
      background: red;
      border-color: red;
      color: #fff;
    }
  }
`;

export const Add = styled.div`
  height: 6rem;
  width: 100%;
  background: #f9f9f9;
  padding: 0 3rem;
  border-top: 1px solid #dddada;

  display: flex;
  justify-content: flex-end;
  align-items: center;

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    height: 3rem;
    padding: 0 2rem;
    max-width: 15rem;
    border: 1px solid #cccccc;
    border-radius: 3px;
    background: #ffffff;
    color: #444444;
    font-size: 1.4rem;
    font-weight: 600;
    box-shadow: 0 1px 0 #cccccc;
  }
`;

export const WorkList = styled.div`
  display: flex;
  flex-direction: column;

  @media ${devices.tabletLandscape} {
    flex-direction: row;
  }

  h3 {
    background: #f9f9f9;
    height: 6rem;
    padding: 2.1rem 3rem;

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 1.8rem;
    font-weight: 500;
    border-bottom: 1px solid #dddada;
    width: 100%;

    @media ${devices.tabletLandscape} {
      height: 25rem;
      max-width: 26rem;
      border-right: 1px solid #dddada;
      border-bottom: none;
    }
  }

  form {
    @media ${devices.tabletLandscape} {
      display: flex;
      flex-direction: row;
    }
  }
`;
