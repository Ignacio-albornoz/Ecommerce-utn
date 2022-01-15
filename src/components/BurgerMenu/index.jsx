import React from 'react';
import { IoIosMenu, IoIosClose } from 'react-icons/io';
import { BurgerMenu } from './styled';

export const Burger = ({ open, setOpen }) => {
  const Icon = open ? IoIosClose : IoIosMenu;
  return (
    <>
      <BurgerMenu open={open} onClick={() => setOpen(!open)}>
        <Icon size='1.0rem' border-radius='50%' />
      </BurgerMenu>
    </>
  );
};
