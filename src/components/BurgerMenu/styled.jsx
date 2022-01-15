import styled from 'styled-components';

export const BurgerMenu = styled.button`
  display: flex;
  align-items: center;
  width: 2.2rem;
  height: 2.2rem;
  min-height: 40px;
  min-width: 40px;
  position: relative;
  padding: 0;
  z-index: 3;
  

  & svg {
    padding:1px;
    border-radius: 50%;
    min-height: 32px;
    min-width: 32px;
  }

  & svg:hover{
    box-shadow: 0 5px 2px rgba(0, 0, 0, .1);
    background: rgba(0, 0 , 0, 0.01);
  }
`;
