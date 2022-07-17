import React, { useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import useInputValue from '../Hooks/useInputValue';
import { Button, Input, Form, Title, RegisterLink, LinkWrap } from './styled';

export const FormLogin = ({ setOpen, userS, userData }) => {
  const email = useInputValue('');
  const password = useInputValue('');
  const auth = getAuth();
  const [loading, setLoading] = useState(false);
  const [userEmail, SetUserEmail] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        const { data } = userCredential;
        /* const datita = ({ active: true, email: data.email });
        datita ? handleActiveUser(datita) : null;
        //handleActiveUser({ name: 'name', email: user.email, active: user.auth._isInitialized });
        console.log(datita);
        console.log(user);
        return user.email; */
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
  };

  const handleLogOut = () => {
    signOut(auth).then(() => {
      setLoading({ active: false, email: 'invitado' });
      handleActiveUser(loading);
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div>
      {
        userData.auth._isInitialized ? (
          <Form>
            <h1>Estas logueado !</h1>
            <p>{userData.email}</p>
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
