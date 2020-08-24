import React from 'react';

import { StyledButton } from './button-styles';

interface Props {
    type?: 'submit' | 'reset' | 'button';
    typeColor: string;
};

const Button: React.FC<Props> = ({ type, children, typeColor }) => (
  <StyledButton type={type} typeColor={typeColor}>
    {children}
  </StyledButton>
);

export default Button;
