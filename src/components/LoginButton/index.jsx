import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getAuth } from 'firebase/auth';
import { BsPerson, BsPersonCheck } from 'react-icons/bs';

import { Button } from './styled';

export const LoginButton = ({ open, setOpen, menuActive, auth = false, email }) => {
  const Icon = auth ? BsPersonCheck : BsPerson;

  return (
    <>
      {
        auth._isInitialized ? (
          <Button menu={menuActive} open={open} onClick={() => setOpen(!open)}>
            <Icon size='1.0rem' border-radius='50%' />
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
