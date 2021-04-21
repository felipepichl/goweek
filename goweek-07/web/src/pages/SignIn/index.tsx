import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';

const SignIn: React.FC = () => {
  return (
    <>
      <div>
        <img src={logo} alt="Instaclone" />

        <Input name="email" />
      </div>

      <footer>
        <p>
          {' '}
          Don&apos;t have an account?
          <Link to="/register"> Sign up</Link>
        </p>
      </footer>
    </>
  );
};

export default SignIn;
