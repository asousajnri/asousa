import React from 'react';

import { Container, Item } from './styles';

const OtherContacts = ({ phones, emails }) => (
  <Container>
    <Item>
      <h3>Phone</h3>
      {phones.map(item => (
        <span key={item._id}>{item.phone}</span>
      ))}
    </Item>
    <Item>
      <h3>Email</h3>
      {emails.map(item => (
        <span key={item._id}>{item.email}</span>
      ))}
    </Item>
  </Container>
);

export default OtherContacts;
