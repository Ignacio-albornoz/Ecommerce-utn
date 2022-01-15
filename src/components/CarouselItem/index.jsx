import React, { useState, useEffect } from 'react';
import { Image } from './styles';

export const CarouselItem = ({
  thumbnail_id = '',
  title = 'Cuadro muestra',
}) => {
  const [itemImage, setItemImage] = useState('');
  const API = `https://api.mercadolibre.com/pictures/?ids=${thumbnail_id}`;
  const SIZE_IMAGE = '800x800';

  useEffect(
    () => {
      fetch(API).then((res) => res.json()).then((data) => setItemImage(data[0].variations.filter((image) => image.size === SIZE_IMAGE)));
      return itemImage;

    }, [],

  );

  return (
    itemImage ?
      <Image src={itemImage[0].url} alt={title} /> :
      <Image src={itemImage} alt={title} />
  );

};
