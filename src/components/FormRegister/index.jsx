import React from 'react';
import { getAuth } from 'firebase/auth';
import useInputValue from '../Hooks/useInputValue';
import { createUser } from '../../firebase/firebaseConfig';
import { Button, Input, Form, Title } from './styled';

export const FormRegister = ({ title }) => {
  const firstname = useInputValue('');
  const lastname = useInputValue('');
  const email = useInputValue('');
  const phonenumber = useInputValue('');
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
        <Input placeholder='Nombre...' type='text' {...firstname} />
        <Input placeholder='Apellido...' type='text' {...lastname} />
        <Input placeholder='Email...' type='email' {...email} />
        <Input placeholder='Telefono...' type='number' {...phonenumber} />
        <Input placeholder='Contraseña...' type='password' {...password} />
        <Input placeholder='Repetir Contraseña...' type='password' {...repeatpassword} />
        <Button type='submit'>Registrate</Button>
      </Form>
    </div>
  );
};

