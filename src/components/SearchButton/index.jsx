import React, { useState } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { SearchBar } from '../SearchBar';

import { Button } from './styles';

export const SearchButton = ({ menuActive, setSearch }) => {
  const [openModal, setOpenModal] = useState(false);
  const Icon = openModal ? IoIosSearch : IoIosSearch;
  return (
    <>
      <Button menu={menuActive} onClick={() => setOpenModal(!openModal)}>
        <Icon size='1.0rem' border-radius='50%' />
      </Button>
      <SearchBar open={openModal} setSearch={setSearch} setOpenSearch={setOpenModal} />
    </>
  );
};
