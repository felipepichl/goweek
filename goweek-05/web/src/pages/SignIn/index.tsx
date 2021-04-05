import React from 'react';

import logo from '../../assets/logo.svg';

import { Container, Content, ImageContainer } from './styles';

const SignIn: React.FC = () => {
  return (
    <Container>
      <Content>
        <ImageContainer>
          <img src={logo} alt="Logo" />
        </ImageContainer>

        <form>
          <h1>Log in to Twitter</h1>

          <input placeholder="GitHub user" />

          <button type="submit">Log in</button>
        </form>
      </Content>
    </Container>
  );
};

export default SignIn;
