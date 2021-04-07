import { ValidationError } from 'yup';

interface Errors {
  [key: string]: string;
}

export default function getValidationErros(err: ValidationError): Errors {
  const validationsErrors: Errors = {};

  err.inner.forEach(error => {
    if (error.path) {
      validationsErrors[error.path] = error.message;
    }

    // validationsErrors[error.path] = error.message;
  });

  return validationsErrors;
}
