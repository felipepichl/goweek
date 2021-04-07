import React, { useCallback, useRef } from 'react';
import { FiGithub } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErros from '../../utils/getValidationErrors';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';

import { Container, Content, ImageContainer } from './styles';

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: object) => {
    formRef.current?.setErrors({});

    try {
      const schema = Yup.object().shape({
        login: Yup.string()
          .required('Login do GitHub é obrigatório')
          .lowercase('Apenas letras minúsculas')
          .strict(),
      });

      await schema.validate(data, { abortEarly: false });
    } catch (error) {
      const errors = getValidationErros(error);

      formRef.current?.setErrors(errors);
    }
  }, []);

  return (
    <Container>
      <Content>
        <ImageContainer>
          <img src={logo} alt="Logo" />
        </ImageContainer>

        <Form ref={formRef} onSubmit={handleSubmit}>
          <h1>Log in to Twitter</h1>

          <Input name="login" icon={FiGithub} placeholder="GitHub login" />

          <button type="submit">Log in</button>
        </Form>
      </Content>
    </Container>
  );
};

export default SignIn;
