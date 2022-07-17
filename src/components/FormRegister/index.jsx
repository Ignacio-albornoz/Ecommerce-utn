import React from 'react';
import { getAuth } from 'firebase/auth';
import useInputValue from '../hooks/useInputValue';
import { createUser } from '../../firebase/firebaseConfig';
import { Button, Input, Form, Title } from './styled';

export const FormRegister = () => {
  const email = useInputValue('');
  const password = useInputValue('');
  const repeatpassword = useInputValue('');
  const auth = getAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(auth, email.value, password.value);
  };
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Title>Registrate</Title>
        <Input placeholder='Email...' type='email' {...email} />
        <Input placeholder='Contraseña...' type='password' {...password} />
        <Input placeholder='Repetir Contraseña...' type='password' {...repeatpassword} />
        <Button type='submit'>Registrate</Button>
      </Form>
    </div>
  );
};

