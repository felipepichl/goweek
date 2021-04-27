import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import * as Yup from 'yup';

import getValidationsErros from '../../utils/getValidationsErrors';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { AnimationContainer } from './styles';

interface ISignInFormData {
  email: string;
}

const SignIn: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: ISignInFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('A valid email is required')
          .required('This field is required'),
      });

      await schema.validate(data, { abortEarly: false });

      console.log('Sign In');
    } catch (err) {
      if (err instanceof Yup.ValidationError) {
        const error = getValidationsErros(err);

        formRef.current?.setErrors(error);
      }
    }
  }, []);

  return (
    <>
      <AnimationContainer>
        <div>
          <Form ref={formRef} onSubmit={handleSubmit}>
            <img src={logo} alt="Instaclone" />

            <Input name="email" placeholder="Email" />

            <Button type="submit">Log in</Button>
          </Form>
        </div>
      </AnimationContainer>

      <footer>
        <AnimationContainer>
          <p>
            Don&apos;t have an account?
            <Link to="/register"> Sign up</Link>
          </p>
        </AnimationContainer>
      </footer>
    </>
  );
};

export default SignIn;
