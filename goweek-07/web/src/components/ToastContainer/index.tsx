import React from 'react';

import { Container, Toast } from './styles';

const ToastContainer: React.FC = () => {
  return (
    <Container>
      <Toast>
        <div>
          <strong>An error ocurred</strong>
        </div>
      </Toast>
    </Container>
  );
};

export default ToastContainer;
