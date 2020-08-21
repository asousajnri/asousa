import React from 'react';

import Form from '../form';
import Button from '../button';

import {
  StyledMessage,
  StyledBanner,
  StyledHalf,
} from './message-styles';

const Message = () => {
  return (
    <StyledMessage>
      <StyledHalf>
        <Form.Container>
          <Form.Input label="Nome" type="text" />
          <Form.Input label="Email" type="email" />
          <Form.Input label="Assunto" type="text" />
          <Form.Textarea label="Assunto" />
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
    </StyledMessage>
  );
};

export default Message;
