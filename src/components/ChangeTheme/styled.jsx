import styled, { css } from 'styled-components';

export const ButtonChangeTheme = styled.button`
  display: flex;
  opacity:0;
  align-items: center;
  position: relative;
  padding: 0;
  z-index: 3;
  ${(props) => props.menu && css`
      opacity: 1;
      display: flex;
    `}

  & svg {
    padding: 1px;
    border-radius: 50%;
    height: 24px;
    width: 24px;
  }

  & svg:hover{
    background: rgba(0, 0 , 0, 0.01);
  }
`;
