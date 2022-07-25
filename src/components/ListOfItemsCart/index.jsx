import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { connect } from 'react-redux';
import { BsCheckCircleFill } from 'react-icons/bs';
import { ItemCart } from '../ItemCart';
import { ItemCartInvited } from '../ItemCartInvited';
import { restartTotal } from '../../redux/action';
import { db } from '../../firebase/firebaseConfig';
import { Container, List, Li, Title, Button, WrapButton, TotalPrice, WrapFinishMessage, HomeAnchor } from './styles';

const ListOfItemsCartContainer = (props) => {
  const { user, totalPrice, cartList, restartTotal } = props;
  const [userItemCart, setUserItemCart] = useState();
  const [invitedItemCart, setInvitedItemCart] = useState(cartList);
  const [price, setPrice] = useState(0);
  const [buy, setBuy] = useState(false);

  useEffect(() => {
    console.log(cartList);
    const getItemCart = async () => {
      console.log('GET ITEMS CART');
      const itemCartCol = collection(db, 'itemCart');
      const itemSnapshot = await getDocs(itemCartCol);
      const getItem = itemSnapshot.docs.map((doc) => ({ data: doc.data().data, id: doc.id }));
      const filterItem = getItem.filter((itemFilt) => itemFilt.data.user.email === user.email);
      setUserItemCart(filterItem);
      const suma = filterItem.map((item) => item.data.price);
      restartTotal();
      console.log(suma);
      console.log(filterItem);
      console.log(price);
      return { filterItem, suma };
    };

    //HACER SUMA ACA
    restartTotal();
    user.email === 'invitado' ? setInvitedItemCart(cartList) && cartList.map((item) => { item.price + total; }) : getItemCart();

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
        invitedItemCart && invitedItemCart.length > 0 ?
          invitedItemCart.map((item) => ((
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
              <Li key={item.data.itemId}>
                <ItemCart {...item} />
              </Li>
            )))) : <h1>LOADING!!!</h1>
      }

    </List>
  );

  return (
    <Container>
      <Title>Carro</Title>
      {user.email === 'invitado' ? renderCartInvitado() : renderCartUser()}
      {cartList.length > 0 ? renderWrapButton() : null}
      {userItemCart ? renderWrapButton() : null}

    </Container>
  );
};

const mapDispatchToProps = {
  restartTotal,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    totalPrice: state.totalPrice,
    cartList: state.cartList,
  };
};

export const ListOfItemsCart = connect(mapStateToProps, mapDispatchToProps)(ListOfItemsCartContainer);
