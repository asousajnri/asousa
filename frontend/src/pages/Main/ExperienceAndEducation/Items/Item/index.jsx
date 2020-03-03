import React from 'react';

import { Container } from './styles';

const Item = ({ title, subTitle }) => (
  <Container>
    <h3>{title}</h3>
    <span>{subTitle}</span>
  </Container>
);

export default Item;
