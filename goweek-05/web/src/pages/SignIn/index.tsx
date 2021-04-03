import React from 'react';

import logo from '../../assets/logo.svg';

import { Container } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <img src={logo} alt="Logo" />

      <form>
        <h1>Log in to Twitter</h1>

        <input placeholder="GitHub user" />

        <button type="submit">Log in</button>
      </form>
    </Container>
  );
};

export default SignIn;
