import React from 'react';

import { Container, Item } from './styles';

const OtherContacts = () => {
  return (
    <Container>
      <Item>
        <h3>Phone</h3>
        <span>(85) 98824-5549</span>
      </Item>
      <Item>
        <h3>Email</h3>
        <span>frontendeveloper@gmail.com</span>
        <span>a.sousa.jnri@gmail.com</span>
      </Item>
    </Container>
  );
};

export default OtherContacts;
