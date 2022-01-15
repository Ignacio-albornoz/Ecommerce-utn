import styled, { keyframes } from 'styled-components';

const moventUp = keyframes`
  from{
    filter: blur(1px);
  }
  to{
    filter: blur(0px);
  }
`;

export const Container = styled.div`
  align-items: center;
  text-align: center;
  padding-top: 10px;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  background: inherit;
  animation-iteration-count: 1;
  animation-fill-mode: forwards;
  animation: 1s ${moventUp} ease-in-out;
`;

export const Title = styled.p`
  font-size: 2rem;
  margin-bottom: -2px;
  font-weight: 600;
  margin-top: 15px;
`;

export const List = styled.ul`
  margin-top: 13px;
  overflow-y: hidden;
  flex-direction: row;
  padding: 0%;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(4, 1fr);
  justify-items: center;
  @media (max-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media (max-width: 670px) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (max-width: 450px) {
    flex-flow: wrap;
    justify-content: center;
    margin-top: 10px;
    overflow-y: hidden;
    flex-direction: row;
    padding: 0%;
  }
  @media (max-width: 400px) {
    grid-template-columns: repeat(1, 1fr)
  }
  
`;

export const Li = styled.li`
  padding: 5px 1px;
  margin-bottom: 15px;
  margin: 0 7px;
  min-width: 170px;
  height: min-content;
  @media (max-width: 400px) {
    grid-template-columns: min-content;
    min-width: 300px;
  }
  @media (max-width: 400px) and (orientation: landscape){
    max-height: 95vh;
  }
  & a {
    margin-bottom: 7px;
  }
  a:hover {
    box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.2);
  }
`;
