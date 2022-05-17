import React from 'react';

import logo from '../../assets/logo.svg';

import { Container } from './styles';

export default function SignIn() {
  return (
    <Container>
      <img src={logo} alt="Logo" />
      <form>
        <input placeholder="Digite seu usuário do github" />
        <button type="button">Entrar</button>
      </form>
    </Container>
  );
}
