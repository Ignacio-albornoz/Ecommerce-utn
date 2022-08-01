import React from 'react';
import ReactLoading from 'react-loading';
import { BsCheckCircleFill } from 'react-icons/bs';
import { ItemCart } from '../ItemCart';
import { ItemCartInvited } from '../ItemCartInvited';
import { List, Li, Title, Button, WrapButton, TotalPrice, WrapFinishMessage, HomeAnchor } from './styles';

export const renderSoldOut = (soldOut) => (
  soldOut ?
    (
      <WrapFinishMessage>
        <h3>Felicitaciones!</h3>
        <Title>Compraste</Title>
        <BsCheckCircleFill />
        <HomeAnchor to='./'>Volver al Inicio</HomeAnchor>
      </WrapFinishMessage>
    ) : null
);

export const renderWrapButton = (totalPrice, handleOnSoldOut) => (
  <WrapButton>
    <TotalPrice>
      Total: $
      {totalPrice}
    </TotalPrice>
    <Button onClick={() => handleOnSoldOut()}>
      Finalizar Compra
    </Button>
  </WrapButton>
);

export const renderCartInvitado = (invitedItemCart) => (
  <List>
    {
      invitedItemCart && invitedItemCart.length > 0 ?
        invitedItemCart.map((item) => ((
          (
            <Li key={item.itemId}>
              <ItemCartInvited id={item.itemId} />
            </Li>
          )))) : null
    }

  </List>
);

export const renderCartUser = (userItemCart) => (
  <List>
    {
      userItemCart ?
        userItemCart.map((item) => ((
          (
            <Li key={item.data.itemId}>
              <ItemCart {...item} />
            </Li>
          )))) : <ReactLoading type='cubes' color='#cacaca' />
    }

  </List>
);

export const renderEmptyCart = () => (
  <List>
    <p>Tu carrito esta vacio</p>
  </List>
);
