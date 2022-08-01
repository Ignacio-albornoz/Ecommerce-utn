import React, { useState } from 'react';
import { ListOfItemsCart } from '../ListOfItemsCart';
import { renderSoldOut } from '../RendersListOfItemsCart';
import { Wrap } from './styles';

export const CartShop = () => {
  const [soldOut, setSoldOut] = useState(false);
  return (
    <Wrap>
      {soldOut ? renderSoldOut : <ListOfItemsCart setSoldOut={setSoldOut} />}
    </Wrap>
  );
};

