import React from 'react';

import { StyledButton } from './button-styles';

const Button = ({ type, children, typeColor }) => {
  return (
    <StyledButton type={type} typeColor={typeColor}>
      {children}
    </StyledButton>
  );
};

export default Button;
