/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import FadeIn from 'react-fade-in';
import { api } from '../../services/api';

import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';

import { Container, Buttons, Done } from './styles';

export default function Main({ match }) {
  const { id: _id } = match.params;
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs', {
        headers: { user: _id },
      });

      setDevs(response.data);
    }

    loadDevs();
  }, [_id]);

  async function handleLike(id) {
    await api.post(`/devs/${id}/likes`, null, {
      headers: { user: _id },
    });

    setDevs(devs.filter(dev => dev._id !== id));
  }

  async function handleDislike(id) {
    await api.post(`/devs/${id}/dislike`, null, {
      headers: { user: _id },
    });

    setDevs(devs.filter(dev => dev._id !== id));
  }

  return (
    <Container>
      <FadeIn delay={85} transitionDuration={600}>
        <Link to="/">
          <img src={logo} alt="Tindev" />
        </Link>

        {devs.length > 0 ? (
          <ul>
            {devs.map(dev => (
              <li key={dev._id}>
                <img src={dev.avatar} alt="" />

                <footer>
                  <strong>{dev.name}</strong>
                  <p>{dev.bio}</p>
                </footer>
                <Buttons>
                  <button type="button" onClick={() => handleDislike(dev._id)}>
                    <img src={dislike} alt="" />
                  </button>
                  <button type="button" onClick={() => handleLike(dev._id)}>
                    <img src={like} alt="" />
                  </button>
                </Buttons>
              </li>
            ))}
          </ul>
        ) : (
          <Done>Done :(</Done>
        )}
      </FadeIn>
    </Container>
  );
}
