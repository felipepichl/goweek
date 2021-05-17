import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';

import Dropzone from '../../components/Dropzone';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

const Post: React.FC = () => {
  const formRaf = useRef<FormHandles>(null);

  const [seletedFile, setSeletedFile] = useState<File>();

  const handleSubmit = useCallback(() => {
    // eslint-disable-next-line no-console
    console.log('Submit');
  }, []);

  return (
    <Container>
      <Content>
        <Form ref={formRaf} onSubmit={handleSubmit}>
          <Dropzone onFileUploaded={setSeletedFile} />
          <Input name="description" placeholder="Description" />
          <Button>Send</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Post;
