import React from 'react';
import { Form } from '@unform/web';
import { FiGithub } from 'react-icons/fi';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';

import { Container, Content, ImageContainer } from './styles';

const SignIn: React.FC = () => {
  function handleSubmit(data: object): void {
    console.log(data);
  }

  return (
    <Container>
      <Content>
        <ImageContainer>
          <img src={logo} alt="Logo" />
        </ImageContainer>

        <Form onSubmit={handleSubmit}>
          <h1>Log in to Twitter</h1>

          <Input name="login" icon={FiGithub} placeholder="GitHub user" />

          <button type="submit">Log in</button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
