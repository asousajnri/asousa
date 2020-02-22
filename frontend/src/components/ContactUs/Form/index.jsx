import React from 'react';

import { 
	FormContainer, 
	Input, 
	Textarea,
	Button
} from './styles';

const Form = () => {
  return (
    <FormContainer>
      <Input placeholder="Your name"/>
      <Input placeholder="Your email"/>
      <Textarea as="textarea" placeholder="Your message" />
      <Button as="button">Enviar</Button>
    </FormContainer>
  );
};

export default Form;
