import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../components/Button';
import Form from '../../components/Form';
import { LoginContainer, GoBack } from './styles';

import HelmetTitleAndFavicon from '../../components/HelmetTitleAndFavicon';

const Login = () => (
  <>
    <HelmetTitleAndFavicon pageTitle="Login" />
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
  </>
);

export default Login;
