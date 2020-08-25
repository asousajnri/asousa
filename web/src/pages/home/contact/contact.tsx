import React, { useRef } from 'react';

import { Form, Button } from '../../../components';

import {
  StyledContact,
  StyledBanner,
  StyledHalf,
} from './contact-styles';

const Contact: React.FC = () => {
  const inputRef = useRef(null);
  const textareRef = useRef(null);

  return (
    <StyledContact>
      <StyledHalf>
        <Form.Container onSubmit={() => 0}>
          <Form.Input
            ref={inputRef}
            labelText="Nome"
            type="text"
          />
          <Form.Input
            ref={inputRef}
            labelText="Email"
            type="email"
          />
          <Form.Input
            ref={inputRef}
            labelText="Assunto"
            type="text"
          />
          <Form.Textarea
            ref={textareRef}
            labelText="Assunto"
          />
          <Button typeColor="secondary" type="submit">
            Enviar
          </Button>
        </Form.Container>
      </StyledHalf>
      <StyledHalf>
        <StyledBanner>
          <h3>Faaaala Galera,</h3>
          <p>
            Obrigado por acessarem meu site. Qualquer
            dúvida, sugestão ou interesse pelo meu trabalho,
            entre em contato pelo <em>formulário</em> dessa
            sessão.
          </p>

          <em>Vlws, flws!!</em>
        </StyledBanner>
      </StyledHalf>
    </StyledContact>
  );
};

export default Contact;
