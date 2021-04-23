import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
  return (
    <>
      <div>
        <img src={logo} alt="Intaclone" />

        <h2>Sign up to see photos and videos from your friends.</h2>

        <Input name="email" placeholder="Email" />
        <Input name="fullname" placeholder="Fullname" />
        <Input name="username" placeholder="Username" />

        <Button>Sign up</Button>
      </div>

      <footer>
        <p>
          Have an account?
          <Link to="/"> Log in</Link>
        </p>
      </footer>
    </>
  );
};

export default SignUp;
