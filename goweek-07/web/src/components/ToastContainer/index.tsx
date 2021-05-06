import React from 'react';
import { useTransition } from 'react-spring';

import { IToastMessage } from '../../hooks/toast';
import { Container } from './styles';

import Toast from './Toast';

interface IToastProps {
  messages: IToastMessage[];
}

const ToastContainer: React.FC<IToastProps> = ({ messages }) => {
  const messagesWithTransitions = useTransition(
    messages,
    message => message.id,
    {
      from: { right: '-120%', opacity: 0 },
      enter: { right: '0%', opacity: 1 },
      leave: { right: '-120%', opacity: 0 },
    },
  );

  return (
    <Container>
      {messagesWithTransitions.map(({ key, item, props }) => (
        <Toast key={key} message={item} style={props} />
      ))}
    </Container>
  );
};

export default ToastContainer;
