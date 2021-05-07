import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo-feed.svg';
import logoMobile from '../../assets/logo.svg';
import discovery from '../../assets/discovery.svg';
import notifications from '../../assets/like.svg';
import profile from '../../assets/profile.svg';

import { Container } from './styles';

const Header: React.FC = () => {
  return (
    <Container>
      <nav>
        <Link to="/">
          <img src={logo} alt="Intaclone" />
        </Link>
      </nav>

      <input type="text" />
    </Container>
  );
};

export default Header;
