import React, { useState } from 'react';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';
import useInputValue from '../hooks/useInputValue';
import { Button, Input, Form, Title, RegisterLink, LinkWrap, H2, P } from './styled';

export const FormLogin = ({ setOpen, auth, userData, setLogout }) => {
  const email = useInputValue('');
  const password = useInputValue('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        setLoading(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleLogOut = () => {
    signOut(auth).then(() => {
      setLogout(true);
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div>
      {
        userData ? (
          <Form>
            <H2>Estas logueado !</H2>
            <P>{userData.email}</P>
            <Button type='button' onClick={() => handleLogOut()}>Cerrar Sesion</Button>
          </Form>
        ) :
          (
            <Form onSubmit={handleSubmit}>
              <Title>Login</Title>
              <Input placeholder='Email...' type='email' {...email} />
              <Input placeholder='Contraseña...' type='password' {...password} />
              <LinkWrap type='submit' onClick={() => setOpen(false)}>
                <RegisterLink to='/register/'>No estas registrado? Haz click aqui!</RegisterLink>
              </LinkWrap>
              <Button type='submit'>Iniciar Sesion</Button>

            </Form>
          )

      }
    </div>
  );
};
