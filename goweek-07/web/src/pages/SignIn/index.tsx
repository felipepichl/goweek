import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import * as Yup from 'yup';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { AnimationContainer } from './styles';

interface ISignInFormData {
  email: string;
}

const SignIn: React.FC = () => {
  const handleSubmit = useCallback(async (data: ISignInFormData) => {
    try {
      const schema = Yup.object().shape({
        email: Yup.string()
          .email('A valid email is required')
          .required('This field is required'),
      });

      await schema.validate(data, { abortEarly: false });

      console.log('Log In');
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <>
      <AnimationContainer>
        <div>
          <Form onSubmit={handleSubmit}>
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
