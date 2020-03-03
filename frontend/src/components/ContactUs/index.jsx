import React from 'react';

import BlockTitle from '../BlockTitle';
import { ContactUs as IconContactUs } from '../LayoutIcons';
import Form from './Form';
import OtherContacts from './OtherContacts';
import Social from './Social';
import { ContactUsContainer, ColumnOtherContacts, ColumnForm } from './styles';

const ContactUs = () => (
  <ContactUsContainer>
    <ColumnForm>
      <BlockTitle titleText="Contact US" IconTitle={IconContactUs} />
      <Form />
    </ColumnForm>

    <ColumnOtherContacts>
      <OtherContacts />
      <Social />
    </ColumnOtherContacts>
  </ContactUsContainer>
);

export default ContactUs;
