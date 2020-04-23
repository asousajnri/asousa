import React, { useState, useEffect } from 'react';

import { Form as UnForm } from '@unform/web';

import api from '../../services/api';

import OtherContacts from './OtherContacts';
import Social from './Social';

import { Container, Contacts } from './styles';

const Footer = ({ children }) => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function loadContacts() {
      const response = await api.get('get-contacts');

      setContacts(response.data);
    }

    loadContacts();
  }, []);

  const handleSubmit = (data, { reset }) => {
    console.log(data);

    reset();
  };

  return (
    <Container>
      {contacts.map(element => (
        <Contacts key={element._id}>
          <OtherContacts phones={element.phones} emails={element.emails} />
          <Social social={element.socialNetworks} />
        </Contacts>
      ))}
    </Container>
  );
};

export default Footer;
