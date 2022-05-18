import React from 'react';
import FadeIn from 'react-fade-in';
import { Container } from './styles';

export default function Main({ match }) {
  return (
    <Container>
      <FadeIn delay={85} transitionDuration={600}>
        <h1>{match.params.id}</h1>
      </FadeIn>
    </Container>
  );
}
