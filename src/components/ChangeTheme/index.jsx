import React from 'react';
import { BsMoon, BsSun } from 'react-icons/bs';
import { ButtonChangeTheme } from './styled';

export const ChangeTheme = ({ open, setOpen, menuActive }) => {
  const Icon = open ? BsSun : BsMoon;
  return (
    <>
      <ButtonChangeTheme menu={menuActive} open={open} onClick={() => setOpen(!open)} disabled={!menuActive}>
        <Icon size='1.0rem' border-radius='50%' />
      </ButtonChangeTheme>
    </>
  );
};
