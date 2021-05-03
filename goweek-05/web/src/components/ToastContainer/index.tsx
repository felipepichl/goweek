import React from 'react';

import Toast from './Toast';

import { IToastMessage } from '../../hooks/toast';
import { Container } from './styles';

interface IToastContainerProps {
  messages: IToastMessage[];
}

const TooastContainer: React.FC<IToastContainerProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} message={message} />
      ))}
    </Container>
  );
};

export default TooastContainer;
