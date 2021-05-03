import React from 'react';
import { FiAlertCircle, FiXCircle } from 'react-icons/fi';

import { IToastMessage, useToast } from '../../../hooks/toast';
import { Container } from './styles';

interface IToastProps {
  message: IToastMessage;
}

const Toast: React.FC<IToastProps> = ({ message }) => {
  const { removeToast } = useToast();

  return (
    <Container type={message.type} hasDescription={!!message.description}>
      <FiAlertCircle size={20} />

      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button onClick={() => removeToast(message.id)} type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
