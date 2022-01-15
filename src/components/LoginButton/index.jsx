import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAuth } from 'firebase/auth';
import { BsPerson, BsPersonCheck } from 'react-icons/bs';
import { setActiveUser } from '../../redux/action';
import { Button } from './styled';

const LoginButtonContainer = ({ open, setOpen, menuActive, user, setActiveUser }) => {
  const Icon = user.active ? BsPersonCheck : BsPerson;
  const auth = getAuth();

  const handleActiveUser = (d) => {
    setActiveUser(d);
  };

  useEffect(() => {

    auth.onAuthStateChanged((data) => {
      data ? (user.active = true, user.email = data.email) : (user.active = false);
    });

  }, [auth.onAuthStateChanged]);

  return (
    <>
      {
        user.active ? (
          <Button menu={menuActive} open={open} onClick={() => setOpen(!open)}>
            <Icon size='1.0rem' border-radius='50%' />
            <p>{user.name}</p>
          </Button>
        ) : (
          <Button menu={menuActive} open={open} onClick={() => setOpen(!open)}>
            <Icon size='1.0rem' border-radius='50%' />
          </Button>
        )
      }
    </>
  );
};

const mapDispatchToProps = {
  setActiveUser,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export const LoginButton = connect(mapStateToProps, mapDispatchToProps)(LoginButtonContainer);
