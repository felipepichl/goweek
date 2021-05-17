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

interface ISignUpFormData {
  email: string;
  fullname: string;
  username: string;
}

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(async (data: ISignUpFormData) => {
    try {
      formRef.current?.setErrors({});

      const schema = Yup.object().shape({
        email: Yup.string()
          .email('A valid email is required')
          .required('This field is required'),
        fullname: Yup.string().required('This field is required'),
        username: Yup.string()
          .required('This field is required')
          .lowercase('Lowercase only')
          .strict(),
      });

      await schema.validate(data, { abortEarly: false });

      // eslint-disable-next-line no-console
      console.log('Sign Up');
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
            <img src={logo} alt="Intaclone" />

            <h2>Sign up to see photos and videos from your friends.</h2>

            <Input name="email" placeholder="Email" />
            <Input name="fullname" placeholder="Fullname" />
            <Input name="username" placeholder="Username" />

            <Button type="submit">Sign up</Button>
          </Form>
        </div>
      </AnimationContainer>

      <footer>
        <AnimationContainer>
          <p>
            Have an account?
            <Link to="/"> Log in</Link>
          </p>
        </AnimationContainer>
      </footer>
    </>
  );
};

export default SignUp;
