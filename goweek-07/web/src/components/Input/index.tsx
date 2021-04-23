import React, { InputHTMLAttributes, useEffect } from 'react';
import { useField } from '@unform/core';

import { Container } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
}

const Input: React.FC<InputProps> = ({ name, ...rest }) => {
  const { fieldName, registerField } = useField(name);

  useEffect(() => {
    registerField({
      name: fieldName,
      path: 'value',
    });
  }, [fieldName, registerField]);

  return (
    <>
      <Container>
        <input {...rest} />
      </Container>
    </>
  );
};

export default Input;
