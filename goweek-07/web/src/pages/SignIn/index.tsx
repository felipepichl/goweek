import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { AnimationContainer } from './styles';

interface ISignFormData {
  email: string;
}

const SignIn: React.FC = () => {
  const handleSubmit = useCallback(async (data: ISignFormData) => {
    console.log(data.email);
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
