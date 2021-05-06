import React from 'react';

import { IToastMessage } from '../../hooks/toast';
import { Container } from './styles';

import Toast from './Toast';

interface IToastProps {
  messages: IToastMessage[];
}

const ToastContainer: React.FC<IToastProps> = ({ messages }) => {
  return (
    <Container>
      {messages.map(message => (
        <Toast key={message.id} message={message} style={{}} />
      ))}
    </Container>
  );
};

export default ToastContainer;
