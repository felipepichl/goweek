import React from 'react';
import { FiCircle, FiXCircle } from 'react-icons/fi';

import { Container } from './styles';

const Toast: React.FC = () => {
  return (
    <Container hasDescription>
      <FiCircle size={20} />

      <div>
        <strong>An error ocurred</strong>
        <p>You cannot log in</p>
      </div>

      <button type="button">
        <FiXCircle size={18} />
      </button>
    </Container>
  );
};

export default Toast;
