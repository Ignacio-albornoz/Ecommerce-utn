import React, { useState, useEffect } from 'react';
import { Modal } from 'react-responsive-modal';
import { connect } from 'react-redux';
import { getAuth } from 'firebase/auth';
import { LayoutWrap, Tittle, WrapButtons } from './styled';
import { Burger } from '../BurgerMenu/index';
import { LoginButton } from '../LoginButton';
import { CartButton } from '../CartButton';
import { SearchButton } from '../SearchButton';
import { ChangeTheme } from '../ChangeTheme/index';
import { FormLogin } from '../FormLogin';
import { setEmailUser } from '../../redux/action';
import { SearchBar } from '../SearchBar';

import 'react-responsive-modal/styles.css';

const LayoutContainer = (props) => {
  const [open, setOpen] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [openSearchBar, setOpenSearchBar] = useState(false);
  const [loginData, setLoginData] = useState();
  const [logout, setLogout] = useState();
  const { user, setSearch, active, setActive, setEmailUser } = props;

  const auth = getAuth();

  useEffect(() => {

    auth.onAuthStateChanged((data) => {
      data ? setLoginData(data) : setLoginData();
      data ? setEmailUser(data.email) : setEmailUser('invitado');
      console.log(user);
    });

  }, [logout]);

  const renderLayout = () => (
    <React.StrictMode>
      <LayoutWrap id='Layout' open={open}>
        <Burger open={open} setOpen={setOpen} />
        <Tittle to='/' open={open}>DeRemate</Tittle>
        <WrapButtons>
          <ChangeTheme menuActive={open} open={active} setOpen={setActive} />
          <LoginButton menuActive={open} open={openModal} setOpen={setOpenModal} {...loginData} />
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
        <FormLogin setOpen={setOpenModal} auth={auth} userData={loginData} setLogout={setLogout} />
      </Modal>

      {
        props.children
      }
    </>
  );
};

const mapDispatchToProps = {
  setEmailUser,
};

const mapStateToProps = (state) => {
  return {
    cartList: state.cartList,
    user: state.user,
  };
};

export const Layout = connect(mapStateToProps, mapDispatchToProps)(LayoutContainer);
