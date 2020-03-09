import styled from 'styled-components';

export const Container = styled.li`
  &:last-child {
    a {
      border-bottom: transparent;
    }
  }

  a {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    padding: 2rem 3rem;
    color: ${props => props.theme.colorsDashboard.secundary};
    text-decoration: none;
    position: relative;
    border-bottom: 0.5px solid #f7f5f5;
    cursor: pointer;
    background: transparent;
    transition: background 0.5s ease-in-out;
    position: relative;

    &:hover {
      .bolinha {
        opacity: 1;
      }
    }
  }

  h2 {
    font-size: 1.8rem;
    font-weight: 500;
  }

  .bolinha {
    width: 2rem;
    height: 2rem;
    border-radius: 50%;
    background: ${props => props.theme.colors.secundary};
    position: absolute;
    right: -1rem;
    top: 50%;
    margin-top: -1rem;
    opacity: 0;
    transition: opacity 0.3s ease-in-out;
  }
`;

export const WrapperIcon = styled.i`
  display: block;
  width: 2rem;
  height: 2rem;
  position: relative;
  margin-right: 1rem;
`;
