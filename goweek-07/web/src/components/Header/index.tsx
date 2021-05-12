import React, { useCallback, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import logo from '../../assets/logo-feed.svg';
import logoMobile from '../../assets/logo.svg';
import discovery from '../../assets/discovery.svg';
import notifications from '../../assets/like.svg';
import profile from '../../assets/profile.svg';

import Input from '../Input';

import { Container, Logo, LogoMobile } from './styles';

const Header: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log('Subimt');
  }, []);

  return (
    <Container>
      <nav>
        <Link to="/">
          <Logo src={logo} />
          <LogoMobile src={logoMobile} />
        </Link>
      </nav>
      <Form ref={formRef} onSubmit={handleSubmit}>
        <Input name="search" placeholder="Search" />
      </Form>

      <aside>
        <Link to="/">
          <img src={discovery} alt="" />
        </Link>
        <Link to="/">
          <img src={notifications} alt="" />
        </Link>
        <Link to="/">
          <img src={profile} alt="" />
        </Link>
      </aside>
    </Container>
  );
};

export default Header;
