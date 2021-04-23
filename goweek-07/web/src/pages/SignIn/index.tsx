import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { AnimationContainer } from './styles';

const SignIn: React.FC = () => {
  return (
    <>
      <AnimationContainer>
        <div>
          <img src={logo} alt="Instaclone" />

          <Input name="email" placeholder="Email" />

          <Button>Log in</Button>
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
