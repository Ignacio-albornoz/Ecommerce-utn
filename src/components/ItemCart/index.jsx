import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { TiDelete } from 'react-icons/ti';
import { setTotal } from '../../redux/action';
import { Wrap, Anchor, Image, Title, TitleWrap, Price, Button } from './styles';

const ItemCartContainer = (props) => {
  const { data, itemId } = props;
  const API = `https://api.mercadolibre.com/items/${data.itemId}/`;
  const [itemCartData, useItemCartData] = useState(false);
  const IconDelete = TiDelete;
  useEffect(() => {
    fetch(API).then((res) => res.json()).then((data) => useItemCartData(data));
  }, []);
  const handleSetTotal = (price) => {
    props.setTotal(price);
  };

  itemCartData ? handleSetTotal(itemCartData.price) : null;
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
                <Button type='buttom'>
                  <IconDelete size='0.5rem' border-radius='50%' />
                </Button>
              </Anchor>
            </Wrap>
          ) : <h1>False</h1>/*(
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
