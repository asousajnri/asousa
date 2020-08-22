import React from 'react';

import Form from '../form';
import Button from '../button';

import {
  StyledContact,
  StyledBanner,
  StyledHalf,
} from './contact-styles';

const Contact = () => {
  return (
    <StyledContact>
      <StyledHalf>
        <Form.Container>
          <Form.Input label="Nome" type="text" />
          <Form.Input label="Email" type="email" />
          <Form.Input label="Assunto" type="text" />
          <Form.Textarea label="Mensagem" />
          <Button typeColor="secondary" type="submit">
            Enviar
          </Button>
        </Form.Container>
      </StyledHalf>
      <StyledHalf>
        <StyledBanner>
          <img src="https://place-hold.it/600x600" alt="" />
        </StyledBanner>
      </StyledHalf>
    </StyledContact>
  );
};

export default Contact;
