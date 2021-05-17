import React from 'react';
import { Link } from 'react-router-dom';

import home from '../../assets/home.svg';
import search from '../../assets/search.svg';
import add from '../../assets/add.svg';
import notifications from '../../assets/like.svg';
import profile from '../../assets/profile.svg';

import { Container, Icon } from './styles';

const Footer: React.FC = () => {
  return (
    <Container>
      <Link to="/">
        <Icon src={home} />
      </Link>

      <Link to="/">
        <Icon src={search} />
      </Link>

      <Link to="/post">
        <img src={add} alt="Add" />
      </Link>

      <Link to="/">
        <Icon src={notifications} />
      </Link>

      <Link to="/">
        <Icon src={profile} />
      </Link>
    </Container>
  );
};

export default Footer;
