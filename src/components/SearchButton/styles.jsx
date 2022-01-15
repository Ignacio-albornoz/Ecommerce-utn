import styled, { css } from 'styled-components';

export const Button = styled.button`
  display: flex;
  align-items: center;
  position: relative;
  padding: 0;
  opacity: 1;
  z-index: 3;
  filter: drop-shadow(1px 1px 2px rgba(0, 0 , 0, 0.01));
  padding: 1% 4%;
  ${(props) => props.menu && css`
      opacity: 0;
      display: none;
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
