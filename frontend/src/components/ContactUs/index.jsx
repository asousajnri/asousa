import React from 'react';

import BlockTitleSection from "../../components/BlockTitleSection";

import { ContactUsContainer } from './styles';

import Form from "./Form";
import OtherContacts from "./OtherContacts";
import Social from "./Social";

const ContactUs = () => {
  return (
    <ContactUsContainer>
        <BlockTitleSection 
          titleText="Contact Us" 
          blockColor="primary"/>

        <Form />
        <OtherContacts />
        <Social />
    </ContactUsContainer>
  );
};

export default ContactUs;
