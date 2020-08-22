import React from 'react';

import { StyledContainer } from './container-styles';

const Container = ({ onSubmit, children }) => {
  return (
    <StyledContainer onSubmit={onSubmit}>
      {children}
    </StyledContainer>
  );
};

export default Container;
