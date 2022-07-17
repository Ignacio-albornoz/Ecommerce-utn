import React, { useRef, useEffect } from 'react';
import { IoIosSearch } from 'react-icons/io';
import { connect } from 'react-redux';
import { Input, Form, ButtonSearcher } from './styles';
import useInputValue from '../hooks/useInputValue';

import { setSearchValue } from '../../redux/action';

export const SearchBarContainer = ({ open, setOpenSearch, setSearch, setSearchValue }) => {
  const element = useRef(null);
  const search = useInputValue('');

  useEffect(() => {
    setSearchValue(search.value.toLowerCase());
  }, [search.value]);

  const handleBlur = (e) => {
    //setOpenSearch(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Escape') {
      setSearch('');
      setOpenSearch(false);
    }
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

  return (
    <Form onBlur={handleBlur} open={open} onKeyDown={handleKeyDown}>
      <Input ref={element} placeholder='Buscar...' {...search} autoFocus />
      <ButtonSearcher onClick={HandleChangeClick}>
        <IoIosSearch size='0.8rem' />
      </ButtonSearcher>
    </Form>
  );
};

const mapDispatchToProps = {
  setSearchValue,
};

export const SearchBar = connect(null, mapDispatchToProps)(SearchBarContainer);

