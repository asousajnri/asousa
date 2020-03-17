import React from 'react';

import { Container } from './styles';

const Item = ({ children }) => (
  <Container>
    <span>{children}</span>
  </Container>
);

export default Item;
