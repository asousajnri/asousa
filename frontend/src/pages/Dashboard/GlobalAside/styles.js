import { shade } from 'polished';
import styled from 'styled-components';

export const Container = styled.aside`
  display: flex;
  flex-direction: column;
  padding: 3rem 0;
`;

export const UserSettings = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 2rem;
`;

export const Avatar = styled.div`
  display: flex;
  cursor: pointer;
  transition: border-color 0.3s ease-in-out;
  border: 3px solid transparent;
  position: relative;
  border-radius: 50%;

  &:hover {
    border-color: ${props => props.theme.colors.secundary};

    img {
      /* transform: scale(1.5); */
    }
  }

  img {
    border-radius: 50%;
    filter: grayscale(1);
    height: 6rem;
    width: 6rem;
    overflow: hidden;
    /* transition: transform 0.3s ease-in-out; */
  }
`;

export const PopupNotification = styled.div`
  width: 2rem;
  height: 2rem;
  font-size: 1.4rem;
  overflow: hidden;
  border-radius: 50%;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  right: 0;
  z-index: 2;
  background: ${props => props.theme.colors.secundary};
  color: ${props => props.theme.colorsDashboard.primary};
`;

export const WrapperIcon = styled.i`
  display: block;
  width: 6rem;
  height: 6rem;
  object-fit: cover;
  border: 1px solid #000;
`;
