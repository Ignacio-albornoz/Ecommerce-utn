import React, { useState, useEffect } from 'react';
import { Anchor, WrapImage, Image, Title, Price } from './styles';
import { useNearScreen } from '../hooks/useNearScreen';

export const Item = ({
  title = 'Cuadro muestra',
  price = '1.500',
  thumbnail_id = {},
  thumbnail,
  id,
}) => {

  const [itemImage, setItemImage] = useState(false);
  const API = `https://api.mercadolibre.com/pictures/?ids=${thumbnail_id}`;
  const SIZE_IMAGE = '200x200';
  const [showItem, element] = useNearScreen();

  useEffect(
    () => {

      fetch(API).then((res) => res.json()).then((data) => setItemImage(data[0].variations.filter((image) => image.size === SIZE_IMAGE)));
      return itemImage;

    }, [],
  );
  return (
    <Anchor rel='preload' to={`/detail/${id}`} ref={element}>
      <WrapImage>
        {showItem && (
          <>
            <WrapImage>
              {
                itemImage ?
                  <Image src={itemImage[0].url} alt='mainImg' /> :
                  <Image src={thumbnail} alt='mainImg' />
              }
            </WrapImage>
            <Title>{title}</Title>
            <Price>
              $
              {price}
            </Price>
          </>
        )}

      </WrapImage>

    </Anchor>
  );
};
