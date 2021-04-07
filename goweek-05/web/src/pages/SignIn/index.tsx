import React, { useCallback } from 'react';
import { FiGithub } from 'react-icons/fi';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';

import { Container, Content, ImageContainer } from './styles';

const SignIn: React.FC = () => {
  const handleSubmit = useCallback(async (data: object) => {
    try {
      const schema = Yup.object().shape({
        login: Yup.string()
          .required('Login do GitHub é obrigatório')
          .lowercase('Apenas letras minúsculas')
          .strict(),
      });

      await schema.validate(data, { abortEarly: false });

      console.log(data);
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <Container>
      <Content>
        <ImageContainer>
          <img src={logo} alt="Logo" />
        </ImageContainer>

        <Form onSubmit={handleSubmit}>
          <h1>Log in to Twitter</h1>

          <Input name="login" icon={FiGithub} placeholder="GitHub login" />

          <button type="submit">Log in</button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
