import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { connect } from 'react-redux';
import { BsCheckCircleFill } from 'react-icons/bs';
import { ItemCart } from '../ItemCart';
import { ItemCartInvited } from '../ItemCartInvited';
import { db } from '../../firebase/firebaseConfig';
import { Container, List, Li, Title, Button, WrapButton, TotalPrice, WrapFinishMessage, HomeAnchor } from './styles';

const ListOfItemsCartContainer = (props) => {
  const { user, totalPrice, cartList } = props;
  const [userItemCart, setUserItemCart] = useState();
  const [invitedItemCart, setInvitedItemCart] = useState(cartList);
  const [buy, setBuy] = useState(false);
  useEffect(() => {
    console.log(user);
    const getItemCart = async () => {
      console.log('GET ITEMS CART');
      const itemCartCol = collection(db, 'itemCart');
      const itemSnapshot = await getDocs(itemCartCol);
      const getItem = itemSnapshot.docs.map((doc) => ({ data: doc.data().data, id: doc.id }));
      const filterItem = getItem.filter((itemFilt) => itemFilt.data.user === user.email);
      setUserItemCart(getItem);
      return getItem;
    };

    user.email === 'invitado' ? setInvitedItemCart(cartList) : getItemCart();

  }, []);

  const renderCompra = () => (
    itemCartData ?
      (
        <WrapFinishMessage>
          <h3>Felicitaciones!</h3>
          <Title>{`compraste ${itemCartData.title}!`}</Title>
          <BsCheckCircleFill />
          <HomeAnchor to='./'>Volver al Inicio</HomeAnchor>
        </WrapFinishMessage>
      ) : <h1>Loading</h1>
  );

  const renderWrapButton = () => (
    <WrapButton>
      <TotalPrice>
        Total: $
        {totalPrice}
      </TotalPrice>
      <Button onClick={() => setBuy(true)}>
        Finalizar Compra
      </Button>
    </WrapButton>
  );

  const renderCartInvitado = () => (
    <List>
      {
        cartList && cartList.length > 0 ?
          cartList.map((item) => ((
            (
              <Li key={item.itemId}>
                <ItemCartInvited id={item.itemId} />
              </Li>
            )))) : <p>Tu carrito esta vacio</p>
      }

    </List>
  );

  const renderCartUser = () => (
    <List>
      {
        userItemCart ?
          userItemCart.map((item) => ((
            (
              <Li key={item.itemId}>
                <ItemCart {...item} />
              </Li>
            )))) : <h1>LOADING!!!</h1>
      }

    </List>
  );

  return (
    <Container>
      <Title>Carro</Title>
      {renderCartInvitado()}
      {cartList.length > 0 ? renderWrapButton() : null}
    </Container>
  );
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    totalPrice: state.totalPrice,
    cartList: state.cartList,
  };
};

export const ListOfItemsCart = connect(mapStateToProps, null)(ListOfItemsCartContainer);
