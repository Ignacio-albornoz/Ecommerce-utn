import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #FFF;
  width: 100%;
`;

export const Anchor = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  height: fit-content;
  background-color: #FFF;
  align-items: center;
  border-radius: 4px;
  margin: 2px;
  padding: 0 2%;
  overflow: hidden;
  position: relative;
  text-align: center;
  text-decoration: none;
  box-shadow: 0 0 6px 1px rgba(0, 0, 0, .1);
  :hover {
    box-shadow: 0 0 6px 1px rgba(0, 0, 0, .2);
  }

`;

export const Image = styled.img`
  border-radius: 2%;
  height: auto;
  overflow: hidden;
  object-fit: fill;
  height: auto;
`;

export const TitleWrap = styled.div`
  width: 50%;
`;

export const Title = styled.p`
  font-size: 1rem;
  margin: 0px 2px;
  font-weight: 300;
  font-style: italic;
  margin-top: -5px;
  color: #000;
`;

export const Price = styled.p`
  font-size: 1.3rem;
  font-weight: 600;
  margin: 3px;
  bottom: 0px;
  color: #000;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  position: absolute;
  z-index: 5;
  top: 0;
  right: 0;
  padding: 1%;
  filter: drop-shadow(1px 1px 2px rgba(0, 0 , 0, 0.01));
  ${(props) => props.menu && css`
      opacity: 0;
      display: block;
      z-index: 0;
      
    `}
  

  & svg {
    padding:1px;
    height: 28px;
    width: 28px;
  }

  & svg:hover{
    background: rgba(0, 0 , 0, 0.01);
  }
`;
