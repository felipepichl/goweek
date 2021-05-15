import React, { useEffect, useState } from 'react';
import Loading from 'react-lottie';

import api from '../../services/api';

import loading from '../../assets/history.json';

import { Container, ImageContainer, User } from './styles';

interface User {
  id: string;
  username: string;
  preview: string;
}

const Storie: React.FC = () => {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('users');

      setUsers(response.data);
    }

    loadUsers();
  }, []);

  return (
    <Container>
      {users.map(user => (
        <User key={user.id}>
          <ImageContainer>
            <Loading
              options={{
                animationData: loading,
              }}
            />
            <img src={user.preview} alt="" />
          </ImageContainer>

          <p>bruxo</p>
        </User>
      ))}
    </Container>
  );
};

export default Storie;
