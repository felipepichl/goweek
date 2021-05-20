import React, { useCallback, useRef, useState } from 'react';
import { Form } from '@unform/web';
import { FormHandles } from '@unform/core';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import api from '../../services/api';
import getValidationsErros from '../../utils/getValidationsErrors';

import Dropzone from '../../components/Dropzone';
import Input from '../../components/Input';
import Button from '../../components/Button';

import { Container, Content } from './styles';

interface IPostFormData {
  description: string;
}

const Post: React.FC = () => {
  const formRef = useRef<FormHandles>(null);

  const [seletedFile, setSeletedFile] = useState<File>();

  const history = useHistory();

  const handleSubmit = useCallback(
    async (formData: IPostFormData) => {
      try {
        const schema = Yup.object().shape({
          description: Yup.string().required('This field is required'),
        });

        await schema.validate(formData, { abortEarly: false });

        const data = new FormData();

        if (seletedFile) {
          data.append('image', seletedFile);
          data.append('description', formData.description);
        }

        // await api.post('posts', data);
        history.push('/home');
      } catch (err) {
        if (err instanceof Yup.ValidationError) {
          const error = getValidationsErros(err);

          formRef.current?.setErrors(error);
        }
      }
    },
    [seletedFile, history],
  );

  return (
    <Container>
      <Content>
        <Form ref={formRef} onSubmit={handleSubmit}>
          <Dropzone onFileUploaded={setSeletedFile} />
          <Input name="description" placeholder="Description" />
          <Button>Send</Button>
        </Form>
      </Content>
    </Container>
  );
};

export default Post;
