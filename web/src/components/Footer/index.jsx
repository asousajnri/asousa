import React, { useState, useEffect } from 'react';

import { Form as UnForm } from '@unform/web';

import api from '../../services/api';

import { ContactUs as IconContactUs } from '../LayoutIcons';
import SectionTitle from '../SectionTitle';

import Form from './Form';
import OtherContacts from './OtherContacts';
import Social from './Social';

import { Container, Column } from './styles';

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
      <Column>
        <SectionTitle
          targetSection="contact-us"
          titleText="Contact US"
          IconTitle={IconContactUs}
        />

        <Form.Container>
          <UnForm onSubmit={handleSubmit}>
            <Form.Input name="name" placeholder="Your name" />
            <Form.Input name="email" type="email" placeholder="Your email" />
            <Form.Textarea name="message" placeholder="Your message" />
            <Form.Button type="submit">Enviar</Form.Button>
          </UnForm>
        </Form.Container>
      </Column>
      {contacts.map(element => (
        <Column key={element._id}>
          <OtherContacts phones={element.phones} emails={element.emails} />
          <Social social={element.socialNetworks} />
        </Column>
      ))}
    </Container>
  );
};

export default Footer;
