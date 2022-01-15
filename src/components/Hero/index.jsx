import React from 'react';
import { Img, ImgWrapper } from './styles';

const DEFAULT_IMG = 'https://http2.mlstatic.com/D_NQ_658433-MLA47933462741_102021-OO.webp';

export const Hero = ({ text = 'Cuadros & Laminas', srcImage = DEFAULT_IMG }) => (
  <>
    <ImgWrapper>
      <Img src={srcImage} />
    </ImgWrapper>
  </>
);
