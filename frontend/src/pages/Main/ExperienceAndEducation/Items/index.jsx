import React from 'react';

import { uniqueId } from 'lodash';

import Item from './Item';
import { Container } from './styles';

const Items = ({ data }) => (
  <Container>
    {data.map(item => (
      <Item key={uniqueId()} title={item.title} subTitle={item.subtitle} />
    ))}
  </Container>
);

export default Items;
