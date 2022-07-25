import React, { useState, useEffect } from 'react';
import { Modal } from 'react-responsive-modal';
import { connect } from 'react-redux';
import { addItemCartRedux } from '../../redux/action';
import { addItemCart, getItemCart } from '../../api';
import { WrapDetailInfo, Wrap, Title, Price, Info, ButtonComprar } from './styles';
import { ListOfItemsCart } from '../ListOfItemsCart';

export const DetailInfoContainer = ({
  title = 'Cuadro Muestra',
  price = '10.500',
  id,
  user = 'invitado',
  addItemCartRedux,
}) => {

  const API = `https://api.mercadolibre.com/items/${id}/description`;
  const [description, setDescription] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const data = { itemId: id, user, price };
  const invitedData = { itemId: id, price };

  useEffect(() => {
    fetch(API).then((res) => res.json()).then((data) => setDescription(data.plain_text));
  }, []);
  /*const setLocalStorage = () => {
    try {
      window.localStorage.setItem(key, { data });
    } catch (e) {
      console.error(e);
    }
  };*/
  const handleAddItemFireStore = () => {
    if (user === 'invitado' || user === undefined) {
      console.log(invitedData);
      addItemCartRedux(invitedData);
    } else {
      console.log(data);
      addItemCart(data);
      addItemCartRedux(data);
    }
  };

  return (
    <WrapDetailInfo>
      <Wrap>
        <Price>
          $
          {price}
        </Price>
        <ButtonComprar onClick={() => handleAddItemFireStore() | setOpenModal(!openModal) | getItemCart()}>Comprar</ButtonComprar>
      </Wrap>
      <Title>{title}</Title>
      <Info>
        {description}
      </Info>
      <Modal open={openModal} onClose={() => setOpenModal(!openModal)}>
        <ListOfItemsCart />
      </Modal>
    </WrapDetailInfo>
  );
};

const mapDispatchToProps = {
  addItemCartRedux,
};
const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

export const DetailInfo = connect(mapStateToProps, mapDispatchToProps)(DetailInfoContainer);
