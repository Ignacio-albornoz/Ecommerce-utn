import React, { useRef, useEffect } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { WrapBarSearch, Form, ButtonSearcher } from './styles';
import useInputValue from '../Hooks/useInputValue';

export const SearchBar = ({ open, setOpenSearch, setSearch }) => {
  const element = useRef(null);
  const search = useInputValue('');

  const handleBlur = (e) => {
    //setOpenSearch(false);
  };

  const handleChangeKeyPressEnter = (e) => {
    if (e.key === 'Enter') {
      setSearch(search.value);
      setOpenSearch(false);
    }
  };

  const HandleChangeClick = (e) => {
    setSearch(search.value);
    setOpenSearch(false);
  };

  useEffect(
    () => {
      if (open === true) {
        element.current.focus();
      }
    },
    [open],
  );
  console.log(search.value);
  return (
    <WrapBarSearch onBlur={handleBlur} open={open} onKeyPress={handleChangeKeyPressEnter}>
      <Form ref={element} placeholder='Buscar...' {...search} autoFocus />
      <ButtonSearcher onClick={HandleChangeClick}>
        <IoIosSearch size='0.8rem' />
      </ButtonSearcher>
    </WrapBarSearch>
  );
};
