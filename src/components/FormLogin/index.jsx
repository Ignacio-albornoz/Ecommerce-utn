import React, { useEffect, useState } from 'react';
import { getAuth, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { connect } from 'react-redux';
import useInputValue from '../Hooks/useInputValue';
import { setActiveUser } from '../../redux/action';
import { Button, Input, Form, Title, RegisterLink, LinkWrap } from './styled';

export const FormLoginContainer = (props) => {
  const email = useInputValue('');
  const password = useInputValue('');
  const auth = getAuth();
  const [asd, setAsd] = useState();
  const { setOpen } = props;
  const { userS } = props;

  const handleActiveUser = (d) => {
    props.setActiveUser(d);
  };

  useEffect(() => {

    auth.onAuthStateChanged((data) => {
      data ? setAsd({ active: true, email: data.email }) : setAsd({ active: false, email: 'invitado' });
      asd ? handleActiveUser(asd) : null;
    });

  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email.value, password.value)
      .then((userCredential) => {
        // Signed in
        const { data } = userCredential;
        const datita = ({ active: true, email: data.email });
        datita ? handleActiveUser(datita) : null;
        //handleActiveUser({ name: 'name', email: user.email, active: user.auth._isInitialized });
        return user.email;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
      });
    setOpen(false);
  };

  const handleLogOut = () => {
    signOut(auth).then(() => {
      setAsd({ active: false, email: 'invitado' });
      handleActiveUser(asd);
    }).catch((error) => {
      console.error(error);
    });
  };

  return (
    <div>
      {
        userS.active ? (
          <Form>
            <h1>Estas logueado !</h1>
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
const mapDispatchToProps = {
  setActiveUser,
};

const mapStateToProps = (state) => {
  return {
    userS: state.user,
  };
};
export const FormLogin = connect(mapStateToProps, mapDispatchToProps)(FormLoginContainer);
