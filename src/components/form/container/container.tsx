import React from 'react';

import { StyledContainer } from './container-styles';

interface Props {
    onSubmit(): void;
};

const Container: React.FC<Props> = ({ onSubmit, children }) => (
  <StyledContainer onSubmit={onSubmit}>
    {children}
  </StyledContainer>
);

export default Container;
