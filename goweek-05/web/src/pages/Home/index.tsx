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
        <div>
          <img src={user.avatar_url} alt="" />
          <textarea placeholder="What's happening?" />
        </div>

        <button type="button">Tweet</button>
      </Tweet>
    </Container>
  );
};

export default Home;
