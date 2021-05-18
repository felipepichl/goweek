import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';

import api from '../../services/api';

import Dropzone from '../../components/Dropzone';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

interface PostFormData {
  description: string;
}

const Post: React.FC = () => {
  const formRaf = useRef<FormHandles>(null);

  const [seletedFile, setSeletedFile] = useState<File>();

  const history = useHistory();

  const handleSubmit = useCallback(
    async ({ description }: PostFormData) => {
      const data = new FormData();

      if (seletedFile) {
        data.append('image', seletedFile);
        data.append('description', description);
      }

      await api.post('posts', data);
      history.push('/home');
    },
    [seletedFile],
  );

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
