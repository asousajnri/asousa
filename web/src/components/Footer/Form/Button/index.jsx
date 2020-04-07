import React from 'react';

import { Container } from './styles';

const Button = ({ children, type }) => (
  <Container type={type}>{children}</Container>
);

export default Button;
