import React, { useState } from 'react';
import { Modal } from 'react-responsive-modal';
import { IoCartOutline, IoCartSharp } from 'react-icons/io5';
import { ListOfItemsCart } from '../ListOfItemsCart';

import { Button } from './styles';

export const CartButton = ({ menuActive }) => {
  const [openModal, setOpenModal] = useState(false);
  const Icon = openModal ? IoCartSharp : IoCartOutline;
  return (
    <>
      <Button menu={menuActive} onClick={() => setOpenModal(!openModal)}>
        <Modal open={openModal} onClose={() => setOpenModal(!openModal)}>
          <ListOfItemsCart />
        </Modal>
        <Icon size='1.0rem' border-radius='50%' />
      </Button>
    </>
  );
};

