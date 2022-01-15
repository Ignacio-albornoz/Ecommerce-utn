import styled, { keyframes } from 'styled-components';
import { Link } from 'react-router-dom';
import { fadeIn } from '../styles/animations';

export const hoverAnimation = keyframes`
  from {
    transform: scale(0.3);
    opacity: 0
  }

  to {
    transform: scale(1);
    opacity: 1
  }
`;

export const Anchor = styled(Link)`
  display: flex;
  min-height: 300px;
  height: inherit;
  flex-direction: column;
  background-color: #FFF;
  border-radius: 2%;
  margin: 2px;
  padding: 10px 0;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, .1);
  @media (max-width: 400px) and (orientation: landscape){
    max-height: 55vh;
  }
  :hover {
    box-shadow: 0 0 6px 1px rgba(0, 0, 0, .2);
  }
`;

export const Image = styled.img`
  ${fadeIn({ time: '0.7s' })}
  border-radius: 2%;
  height: auto;
  overflow: hidden;
  object-fit: fill;
  height: auto;
  @media (max-width: 400px) and (orientation: landscape){
    max-height: 55vh;
  }
`;

export const Title = styled.p`
  display: flex;
  height: 3.4rem;
  font-size: 1rem;
  font-weight: 300;
  font-style: italic;
  margin-top: -5px;
  color: #000;
  margin: 7px 2px;
  justify-content: center;
  align-items: center;
`;

export const Price = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 3px;
  bottom: 0px;
  color: #000;
`;
