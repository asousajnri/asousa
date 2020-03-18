import React from 'react';

import { Container, Item } from './styles';

const Items = ({ data }) => (
  <Container>
    {data.map(item => (
      <Item key={item._id}>
        <h3>{item.title}</h3>
        <span>{item.subtitle}</span>
      </Item>
    ))}
  </Container>
);

export default Items;
