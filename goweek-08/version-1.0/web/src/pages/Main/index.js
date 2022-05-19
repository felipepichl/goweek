import React from 'react';
import FadeIn from 'react-fade-in';

import logo from '../../assets/logo.svg';
import like from '../../assets/like.svg';
import dislike from '../../assets/dislike.svg';

import { Container, Buttons } from './styles';

export default function Main({ match }) {
  return (
    <Container>
      <FadeIn delay={85} transitionDuration={600}>
        <img src={logo} alt="Tindev" />

        <ul>
          <li>
            <img
              src="https://avatars.githubusercontent.com/u/2254731?v=4"
              alt=""
            />

            <footer>
              <strong>Diego Fernandes</strong>
              <p>
                "CTO at @Rocketseat. Passionate about education and changing
                people's lives through programming.
              </p>
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

          <li>
            <img
              src="https://avatars.githubusercontent.com/u/2254731?v=4"
              alt=""
            />

            <footer>
              <strong>Diego Fernandes</strong>
              <p>
                "CTO at @Rocketseat. Passionate about education and changing
                people's lives through programming.
              </p>
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

          <li>
            <img
              src="https://avatars.githubusercontent.com/u/2254731?v=4"
              alt=""
            />

            <footer>
              <strong>Diego Fernandes</strong>
              <p>
                "CTO at @Rocketseat. Passionate about education and changing
                people's lives through programming.
              </p>
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

          <li>
            <img
              src="https://avatars.githubusercontent.com/u/2254731?v=4"
              alt=""
            />

            <footer>
              <strong>Diego Fernandes</strong>
              <p>
                "CTO at @Rocketseat. Passionate about education and changing
                people's lives through programming.
              </p>
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
        </ul>
      </FadeIn>
    </Container>
  );
}
