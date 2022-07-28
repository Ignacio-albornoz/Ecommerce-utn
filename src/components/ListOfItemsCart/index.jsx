import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { connect } from 'react-redux';
import { DeleteItemCart } from '../../api';
import { renderCartUser, renderCartInvitado, renderWrapButton, renderEmptyCart } from '../RendersListOfItemsCart';
import { restartTotal, deleteAllItemCartRedux } from '../../redux/action';
import { db } from '../../firebase/firebaseConfig';
import { Container, Title } from './styles';

const ListOfItemsCartContainer = (props) => {
  const { user, totalPrice, cartList, restartTotal } = props;
  const [userItemCart, setUserItemCart] = useState([]);
  const [invitedItemCart, setInvitedItemCart] = useState(cartList);
  const [soldOut, setSoldOut] = useState(cartList);

  useEffect(() => {
    const getItemCart = async () => {
      //Query Firebase
      const itemCartCol = collection(db, 'itemCart');
      const itemSnapshot = await getDocs(itemCartCol);
      const getItem = itemSnapshot.docs.map((doc) => ({ data: doc.data().data, id: doc.id }));
      //Filter user
      const filterItem = getItem.filter((itemFilt) => itemFilt.data.user.email === user.email);
      setUserItemCart(filterItem);

      //Suma
      const suma = filterItem.map((item) => item.data.price);
      //Retart total, para evitar errores
      restartTotal();
      return { filterItem, suma };
    };
    //Evita se iteren las sumas con cada apertura del modal
    restartTotal();
    //Define que lista mostrar, activa query
    user.email === 'invitado' ? setInvitedItemCart(cartList) && cartList.map((item) => { item.price + total; }) : getItemCart();

  }, [cartList]);

  console.log(userItemCart);
  console.log(invitedItemCart);

  const handleOnSoldOut = async (data) => {
    userItemCart.length > 0 ? userItemCart.map((items) => DeleteItemCart(items.id)) : console.msg('No hay items');
    cartList.length > 0 ? deleteAllItemCartRedux() : console.msg('No hay items');
  };

  return (
    <Container>
      <Title>Carro</Title>
      {user.email === 'invitado' ? renderCartInvitado(invitedItemCart) : renderCartUser(userItemCart)}
      {(cartList.length > 0) || (userItemCart.length > 0) ? renderWrapButton(totalPrice, handleOnSoldOut, setSoldOut) : renderEmptyCart()}
    </Container>
  );
};

const mapDispatchToProps = {
  restartTotal,
  deleteAllItemCartRedux,
};

const mapStateToProps = (state) => {
  return {
    user: state.user,
    totalPrice: state.totalPrice,
    cartList: state.cartList,
  };
};

export const ListOfItemsCart = connect(mapStateToProps, mapDispatchToProps)(ListOfItemsCartContainer);
