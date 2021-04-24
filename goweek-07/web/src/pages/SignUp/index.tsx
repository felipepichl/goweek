import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';

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
  const handleSubmit = useCallback(async (data: ISignUpFormData) => {
    console.log(data.email);
    console.log(data.fullname);
    console.log(data.username);
  }, []);

  return (
    <>
      <AnimationContainer>
        <div>
          <Form onSubmit={handleSubmit}>
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
