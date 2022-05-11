import React, { useState, useEffect } from 'react';
import { Modal } from 'react-responsive-modal';
import { connect } from 'react-redux';
import { LayoutWrap, Tittle, WrapButtons } from './styled';
import { Burger } from '../BurgerMenu/index';
import { LoginButton } from '../LoginButton';
import { CartButton } from '../CartButton';
import { SearchButton } from '../SearchButton';
import { ChangeTheme } from '../ChangeTheme/index';
import { FormLogin } from '../FormLogin';
import { SearchBar } from '../SearchBar';

import 'react-responsive-modal/styles.css';

const LayoutContainer = (props) => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const { user, setSearch, active } = props;

  useEffect(() => {
    console.log('USER ACTIVE');
  }, [user.active]);

  const renderLayout = () => (
    <React.StrictMode>
      <LayoutWrap id='Layout' open={open}>
        <Burger open={open} setOpen={setOpen} />
        <Tittle to='/' open={open}>Modulo Final</Tittle>
        <WrapButtons>
          <ChangeTheme menuActive={open} open={active} setOpen={props.setActive} />
          <LoginButton menuActive={open} open={openModal} setOpen={setOpenModal} />
          <CartButton menuActive={open} />
          <SearchButton menuActive={open} open={openSearchBar} setOpen={setOpenSearchBar} setSearch={setSearch} openActive={active} />
        </WrapButtons>
      </LayoutWrap>
    </React.StrictMode>
  );

  return (
    <>
      {renderLayout()}
      <Modal open={openModal} onClose={() => setOpenModal(false)}>
        <FormLogin setOpen={setOpenModal} />
      </Modal>

      {
        props.children
      }
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    cartList: state.cartList,
  };
};

export const Layout = connect(mapStateToProps, null)(LayoutContainer);
