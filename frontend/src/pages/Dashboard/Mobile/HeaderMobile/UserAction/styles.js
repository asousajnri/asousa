import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  width: 2.8rem;
  height: 2.8rem;
  position: relative;
  cursor: pointer;
`;

export const Photo = styled.img`
  overflow: hidden;
  object-fit: cover;
  filter: grayscale(1);
`;

export const UserNotification = styled.span`
  position: absolute;
  width: 2rem;
  height: 2rem;
  padding: 0.3rem;
  font-weight: bold;
  font-size: 1rem;
  background: ${props => props.theme.colors.primary};
  display: flex;
  align-items: center;
  border-radius: 50%;
  justify-content: center;
  color: ${props => props.theme.colorsDashboard.primary};
  top: -6px;
  right: -6px;
`;
