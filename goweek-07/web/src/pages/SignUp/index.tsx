import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { AnimationContainer } from './styles';

const SignUp: React.FC = () => {
  return (
    <>
      <AnimationContainer>
        <div>
          <img src={logo} alt="Intaclone" />

          <h2>Sign up to see photos and videos from your friends.</h2>

          <Input name="email" placeholder="Email" />
          <Input name="fullname" placeholder="Fullname" />
          <Input name="username" placeholder="Username" />

          <Button>Sign up</Button>
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
