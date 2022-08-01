import React, { useState } from 'react';
import { connect } from 'react-redux';
import { IoIosSearch } from 'react-icons/io';
import { SearchBar } from '../SearchBar';

import { Button } from './styles';

export const SearchButton = (props) => {
  const { menuActive, setSearch, detailId } = props;
  const [openModal, setOpenModal] = useState(false);
  const Icon = openModal ? IoIosSearch : IoIosSearch;

  return (
    <>
      <Button menu={menuActive} onClick={() => setOpenModal(!openModal)}>
        <Icon size='1.0rem' border-radius='50%' />
      </Button>
      {
        detailId ? null : <SearchBar open={openModal} setSearch={setSearch} setOpenSearch={setOpenModal} />
      }

    </>
  );
};

