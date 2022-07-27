import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { TiDelete } from 'react-icons/ti';
import { collection, deleteDoc, where } from 'firebase/firestore';
import { db } from '../../firebase/firebaseConfig';
import { DeleteItemCart } from '../../api';
import { setTotal } from '../../redux/action';
import { Wrap, Anchor, Image, Title, TitleWrap, Price, Button } from './styles';

const ItemCartContainer = (props) => {

  const { data, setTotal, id } = props;
  const API = `https://api.mercadolibre.com/items/${data.itemId}/`;
  const [itemCartData, useItemCartData] = useState(false);
  const IconDelete = TiDelete;

  useEffect(() => {
    fetch(API).then((res) => res.json()).then((data) => {
      useItemCartData(data);
      data ? setTotal(data.price) : null;
    });
  }, [data]);

  const handleOnDeleteItem = async (data) => {
    data ? await DeleteItemCart(data) : null;
  };

  return (

    <>

      {
        itemCartData ?
          (
            <Wrap>
              <Anchor>
                <Image src={itemCartData.thumbnail} alt='mainImg' />
                <TitleWrap>
                  <Title>{itemCartData.title}</Title>
                </TitleWrap>
                <Price>
                  $
                  {itemCartData.price}
                </Price>
                <Button type='buttom' onClick={() => handleOnDeleteItem(id)}>
                  <IconDelete size='0.5rem' border-radius='50%' />
                </Button>
              </Anchor>
            </Wrap>
          ) : null/*(
          (
          <Wrap>
            <Anchor>
              <Image src={thumbnail} alt='mainImg' />
              <Title>{title}</Title>
              <Price>
                $
                {price}
              </Price>
            </Anchor>
            <Button onClick={() => setBuy(true)}>
              Finalizar Compra
            </Button>
          </Wrap>
        )*/
      }
    </>
  );
};

const mapDispatchToProps = {
  setTotal,
};

export const ItemCart = connect(null, mapDispatchToProps)(ItemCartContainer);
