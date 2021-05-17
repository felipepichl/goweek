import React, { useCallback, useRef } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

const Post: React.FC = () => {
  const formRaf = useRef<FormHandles>(null);

  const handleSubmit = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log('Submit');
  }, []);

  return (
    <Container>
      <Content>
        <Form ref={formRaf} onSubmit={handleSubmit}>
          <Input name="description" placeholder="Description" />
          <Button>Send</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Post;
