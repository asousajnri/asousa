import React from 'react';

import BlockTitleIcon from '../BlockTitleIcon';
import { ContactUs as IconContactUs } from '../LayoutIcons';
import Form from './Form';
import OtherContacts from './OtherContacts';
import Social from './Social';
import { ContactUsContainer, ColumnOtherContacts, ColumnForm } from './styles';

const ContactUs = () => (
  <ContactUsContainer>
    <ColumnForm>
      <BlockTitleIcon
        targetSection="contact-us"
        titleText="Contact US"
        IconTitle={IconContactUs}
      />
      <Form />
    </ColumnForm>

    <ColumnOtherContacts>
      <OtherContacts />
      <Social />
    </ColumnOtherContacts>
  </ContactUsContainer>
);

export default ContactUs;
