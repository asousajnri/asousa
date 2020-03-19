import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import SectionTitle from '../SectionTitle';
import { ContactUs as IconContactUs } from '../LayoutIcons';
// import Form from './Form';
import OtherContacts from './OtherContacts';
import Social from './Social';
import { ContactUsContainer, ColumnOtherContacts, ColumnForm } from './styles';

import Form from '../Form';

const ContactUs = () => {
  const [contacts, setContacts] = useState([]);

  useEffect(() => {
    async function loadContacts() {
      const response = await api.get('get-contacts');

      setContacts(response.data);
    }

    loadContacts();
  }, []);

  return (
    <ContactUsContainer>
      <ColumnForm>
        <SectionTitle
          targetSection="contact-us"
          titleText="Contact US"
          IconTitle={IconContactUs}
        />

        <Form.Wrapper>
          <Form.Input placeholder="Your name" />
          <Form.Input placeholder="Your email" />
          <Form.Textarea placeholder="Your message" />
          <Form.Button>Enviar</Form.Button>
        </Form.Wrapper>
      </ColumnForm>

      {contacts.map(element => (
        <ColumnOtherContacts key={element._id}>
          <OtherContacts phones={element.phones} emails={element.emails} />
          <Social social={element.socialNetworks} />
        </ColumnOtherContacts>
      ))}
    </ContactUsContainer>
  );
};

export default ContactUs;
