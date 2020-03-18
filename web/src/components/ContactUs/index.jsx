import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import BlockTitleIcon from '../BlockTitleIcon';
import { ContactUs as IconContactUs } from '../LayoutIcons';
import Form from './Form';
import OtherContacts from './OtherContacts';
import Social from './Social';
import { ContactUsContainer, ColumnOtherContacts, ColumnForm } from './styles';

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
        <BlockTitleIcon
          targetSection="contact-us"
          titleText="Contact US"
          IconTitle={IconContactUs}
        />
        <Form />
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
