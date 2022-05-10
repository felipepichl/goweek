import React from 'react';
import FadeIn from 'react-fade-in';
import { Container } from './styles';

export default function Main() {
  return (
    <Container>
      <FadeIn delay={85} transitionDuration={600}>
        <div>
          <h1>hello world</h1>
        </div>
      </FadeIn>
    </Container>
  );
}
