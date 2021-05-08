import React from 'react';
import { Link } from 'react-router-dom';

import home from '../../assets/home.svg';
import search from '../../assets/search.svg';
import add from '../../assets/add.svg';
import notifications from '../../assets/like.svg';
import profile from '../../assets/profile.svg';

import { Container } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <img src={home} alt="" />
      </Link>
    </Container>
  );
};

export default Footer;
