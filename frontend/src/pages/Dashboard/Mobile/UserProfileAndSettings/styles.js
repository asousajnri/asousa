import styled from 'styled-components';

export const WrapperUserAvatar = styled.div`
  display: flex;
  /* align-items: center; */
  width: 100%;
  padding: 3rem 2rem;
  background: #fff;

  h2 {
    display: flex;
    flex-direction: column;
    font-size: 3rem;
    font-weight: 900;
  }

  small {
    margin-top: 0.5rem;
    font-size: 1.8rem;
    font-weight: 400;
    color: #333;
  }
`;

export const UserAvatar = styled.img`
  object-fit: cover;
  width: 8rem;
  height: 8rem;
  margin-right: 1.5rem;
  border-radius: 0.1rem;
  overflow: hidden;
`;
