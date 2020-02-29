import React from 'react';

import BlockTitleSection from "../BlockTitleSection";

import { ContactUsContainer, ColumnOtherContacts, ColumnForm } from './styles';

import Form from "./Form";
import OtherContacts from "./OtherContacts";
import Social from "./Social";

const ContactUs = () => {
  return (
    <ContactUsContainer>
        <ColumnForm>
          <BlockTitleSection titleText="Contact US" blockColor=""/>
          <Form />
        </ColumnForm>

        <ColumnOtherContacts>
          <OtherContacts />
          <Social />
        </ColumnOtherContacts>
    </ContactUsContainer>
  );
};

export default ContactUs;
