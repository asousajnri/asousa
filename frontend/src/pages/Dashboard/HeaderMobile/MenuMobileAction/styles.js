import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.div`
  margin-right: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 3.2rem;
  height: 2.5rem;
  /* box-shadow: 0 0 0 4px transparent; */
  cursor: pointer;
  position: relative;
  transition: all 0.5s ease-in-out;

  &.is-clicked {
    /* width: 5rem; */
    /* background: ${props => shade(0.1, props.theme.colors.primary)}; */
    /* box-shadow: 0 0 0 4px ${props =>
      shade(0.1, props.theme.colors.primary)}; */
    justify-content: center;
  }
`;

export const Line = styled.span`
  width: 100%;
  display: block;
  height: 0.4rem;
  background: #fff;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
  transition: all 0.5s ease-in-out;
  max-width: 3.2rem;
  border-radius: 0.1rem;
  position: absolute;

  &.hide {
    display: none;
  }

  &.is-animated {
  }
`;

export const LineTop = styled(Line)`
  top: 0;

  &.is-animated {
    top: 1rem;
    transform: rotate(45deg);
  }
`;

export const LineCenter = styled(Line)`
  /* top: 50%; */
  /* margin-top: -0.13rem; */
`;

export const LineBottom = styled(Line)`
  bottom: 0;

  &.is-animated {
    bottom: 1.1rem;
    transform: rotate(-45deg);
  }
`;
