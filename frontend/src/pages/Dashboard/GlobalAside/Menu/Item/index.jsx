import React from 'react';

import { Container, WrapperIcon } from './styles';

const Item = ({ name, iconLayout: IconLayout }) => (
  <Container>
    <a href="/">
      <WrapperIcon>
        <IconLayout fill="#fff" />
      </WrapperIcon>
      <h2>{name}</h2>
    </a>
  </Container>
);

export default Item;
