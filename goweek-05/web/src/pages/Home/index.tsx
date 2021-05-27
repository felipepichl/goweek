import React from 'react';
import { useAuth } from '../../hooks/auth';

import Header from '../../components/Header';

import { Container, Tweet } from './styles';

const Home: React.FC = () => {
  const { user } = useAuth();

  return (
    <Container>
      <Header />

      <Tweet>
        <img src={user.avatar_url} alt="" />

        <textarea placeholder="What's happening?" />
      </Tweet>
    </Container>
  );
};

export default Home;
