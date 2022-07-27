import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { TiDelete } from 'react-icons/ti';
import { setTotal, deleteItemCartRedux, subTotal } from '../../redux/action';
import { Wrap, Anchor, Image, Title, TitleWrap, Price, Button } from './styles';

const ItemCartInvitedContainer = (props) => {
  const { id, setTotal, deleteItemCartRedux, subTotal } = props;
  const API = `https://api.mercadolibre.com/items/${id}/`;
  const [itemCartData, useItemCartData] = useState(false);
  const IconDelete = TiDelete;

  useEffect(() => {
    fetch(API).then((res) => res.json()).then((data) => {
      useItemCartData(data);
      data ? setTotal(data.price) : null;
    });

  }, []);

  const handleDeleteItemCartRedux = (idItem) => {
    subTotal(itemCartData.price);
    deleteItemCartRedux(idItem);
  };

  const renderCartUser = () => (
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
        <Button type='buttom' onClick={() => handleDeleteItemCartRedux(id)}>
          <IconDelete border-radius='50%' />
        </Button>
      </Anchor>
    </Wrap>

  );

  return (
    <>
      {
        !itemCartData.error && itemCartData ?
          (
            renderCartUser()
          ) : <p>Loading</p> /*(
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
  deleteItemCartRedux,
  subTotal,
};

export const ItemCartInvited = connect(null, mapDispatchToProps)(ItemCartInvitedContainer);
