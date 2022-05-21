import React, { useEffect, useState } from 'react';
import FadeIn from 'react-fade-in';
import { api } from '../../services/api';

import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';

import { Container, Buttons } from './styles';

export default function Main({ match }) {
  const { id } = match.params;
  const [devs, setDevs] = useState([]);

  useEffect(() => {
    async function loadDevs() {
      const response = await api.get('/devs', {
        headers: { user: id },
      });

      setDevs(response.data);
    }

    loadDevs();
  }, [id]);
  return (
    <Container>
      <FadeIn delay={85} transitionDuration={600}>
        <img src={logo} alt="Tindev" />

        <ul>
          {devs.map(dev => (
            // eslint-disable-next-line no-underscore-dangle
            <li key={dev._id}>
              <img src={dev.avatar} alt="" />

              <footer>
                <strong>{dev.name}</strong>
                <p>{dev.bio}</p>
              </footer>
              <Buttons>
                <button type="button">
                  <img src={dislike} alt="" />
                </button>
                <button type="button">
                  <img src={like} alt="" />
                </button>
              </Buttons>
            </li>
          ))}
        </ul>
      </FadeIn>
    </Container>
  );
}
