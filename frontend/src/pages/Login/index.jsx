import React from 'react';
import { Link } from 'react-router-dom';

// import photo from '../../assets/images/photo.jpg';
import Button from '../../components/Button';
import Form from '../../components/Form';
import Main from '../Main';
import { LoginContainer, GoBack } from './styles';

const Login = () => (
  <LoginContainer>
    <Form.Wrapper>
      <Form.Input placeholder="User" />
      <Form.Input placeholder="Password" />
      <Button type="submit">Acessar</Button>
    </Form.Wrapper>

    <GoBack>
      <Link to="/">Voltar</Link>
    </GoBack>
  </LoginContainer>
);

export default Login;
