import React from 'react';

import photo from '../../assets/images/photo.jpg';
import Button from '../../components/Button';
import Form from '../../components/Form';
import { LoginContainer } from './styles';

const Login = () => (
  <LoginContainer>
    <Form.Wrapper>
      <Form.Input placeholder="User" />
      <Form.Input placeholder="Password" />
      <Button type="submit">Acessar</Button>
    </Form.Wrapper>
  </LoginContainer>
);

export default Login;
