import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErros(err: ValidationError): Errors {
  const validationsErrors: Errors = {};

  err.inner.forEach(error => {
    // validationsErrors[error.] = error.message;
  });

  return validationsErrors;
}
