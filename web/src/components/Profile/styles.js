import styled from "styled-components";

export const StyledProfile = styled.header`
  display: flex;
  flex-direction: column;

  padding: 4rem 2rem;
`;

export const StyledImageProfile = styled.img``;

export const StyledInfos = styled.div`
  background: var(--background-profile-info);
  padding: 2rem;

  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const StyledOffice = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;

  h1,
  h2 {
    text-align: center;
  }

  h1 {
    color: var(--secondary-color);
    font-size: 2.8rem;
  }

  h2 {
    font-weight: 400;
    font-size: 1.6rem;
    color: var(--color-text);
  }
`;
