import styled from "styled-components";

export const Container = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 100%;
  min-height: 20rem;
  position: relative;
  background: #fff;
  border-bottom: 1px solid #eaeaea;
  border-right: 1px solid #eaeaea;
  cursor: pointer;

  h3 {
    text-transform: uppercase;
    font-size: 2.5rem;
    margin-bottom: 1rem;
    z-index: 2;
  }

  span {
    font-size: 1.6rem;
    color: #818181;
    z-index: 2;
  }
`;
