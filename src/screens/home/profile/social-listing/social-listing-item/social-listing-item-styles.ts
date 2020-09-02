import styled from 'styled-components';

interface StyledSocialListingItem {
  onMouseOver(): void;
  onMouseLeave(): void;
}

export const StyledSocialListingItem = styled.li<
  StyledSocialListingItem
>`
  width: 2rem;
  margin-right: 1rem;
  transition: 0.5s;

  &:hover {
    transform: scale(1.2);
  }

  &:last-of-type {
    margin-right: 0;
  }

  a {
    display: flex;
  }
`;
