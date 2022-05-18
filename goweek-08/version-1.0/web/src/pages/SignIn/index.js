import React, { useState } from 'react';
import { api } from '../../services/api';

import logo from '../../assets/logo.svg';

import { Container } from './styles';

export default function SignIn({ history }) {
  const [username, setUsername] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    const response = await api.post('/devs', { username });

    const { _id } = response.data;

    history.push(`/dev/${_id}`);
  }

  return (
    <Container>
      <img src={logo} alt="Logo" />
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Digite seu usuário do github"
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
        <button type="submit">Entrar</button>
      </form>
    </Container>
  );
}
