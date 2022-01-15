import Styled, { css, keyframes } from 'styled-components';
import { Link } from 'react-router-dom';

const AnimationLayout = keyframes`
  from {
    top: -100px;
  }
  to {
    top: -1px;
  }
`;

export const LayoutWrap = Styled.div`
    display: flex;
    height: 3rem;
    min-height: 52px;
    align-items: center;
    text-align:center;
    justify-content: space-between;
    z-index: 2;
    height: 1.6rem;
    padding: 0.2% 1%;
    box-shadow: 0 0 6px 1px rgba(0, 0, 0, .2);
    margin: 0.3px;
    ${(props) => props.open && css`
      animation: 0.3s ${AnimationLayout} ease;
      animation-delay: 0s;
      position: open;
      z-index: 6;
      background: none;
      height: 1.5rem;
      border: none;
      box-shadow: none;
    `}
`;
export const BurgerMenu = Styled.button`
  display: flex;
  align-items: center;

  ${(props) => props.open && css`
      opacity:0.7;
      background: #fff;
      border-radius: 50%;
      box-shadow: 0 0 2px px rgba(0, 0, 0, .3);

  `}
  
  & svg {
    padding:1px;
    color: rgba(0, 0 , 0, 0.75);
    box-shadow: 0 4px 5px rgba(0, 0, 0, .1);
  }
  svg:hover{
    box-shadow: 0 5px 5px rgba(0, 0, 0, .3);
    background: rgba(0, 0 , 0, 0.03);
  }
`;

export const Tittle = Styled(Link)`
  display: flex;
  font-weight: 300;
  color: inherit;
  letter-spacing: -1.2px;
  height: 30px;
  font-size: 30px;
  text-decoration: none;
  width: 150px;
  justify-content: center;
  align-items: center;
  left: 0;
  right: 0;
  margin: 0 auto;
  position: absolute;
  ${(props) => props.open && css`
      opacity:0;
      z-index: 0;
      display:none;
    `}
  :focus {
    outline: none;
  }
  :active {
    color: #000;
  }
`;

export const InteractionButtons = Styled.div`
    display: block;
    height: inherit;
    width: 25%;
    ${(props) => props.open && css`
      opacity:0;
      display:none;
    `}
`;

export const WrapButtons = Styled.div`
  display: flex;
  height: 100%;
  flex-direction: row;
  justify-content: flex-end;
`;
