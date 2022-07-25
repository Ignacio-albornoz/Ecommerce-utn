import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-height: 85vh;
  max-width: 84vw;
  align-items: center;
  text-align: center;
  padding-top: 10px;
  position: relative;
  z-index: 1;
  overflow-x: hidden;
  overflow-y: hidden ;
  background: inherit;
  
  @media (max-width: 650px) {
    min-width: 84vw;
  }
  @media (max-width: 445px) {
    min-width: 84vw;
  }
  @media (max-width: 370px) {
    min-width: 84vw;
    width: 90%;
  }
  @media (max-width: 320px) {
    max-width: 84vw;
    width: 90%;
  }

`;

export const Title = styled.p`
  font-size: 2rem;
  margin-bottom: -2px;
  font-weight: 600;
  margin-top: 15px;
`;

export const List = styled.ul`
  max-height: 68vh;
  margin-top: 13px;
  overflow-y: hidden;
  flex-direction: row;
  padding: 0%;
  margin-bottom: 7vh;
  display: grid;
  gap: 5px;
  grid-template-columns: repeat(1, 1fr);
  grid-auto-rows: min-content;
  justify-items: center;
  overflow-y: scroll;
  overflow-x: hidden;
`;

export const Li = styled.li`
  padding: 5px 1px;
  margin-bottom: 15px;
  margin: 0 7px;
  height: min-content;
  width: 100%;
  padding: 1%;
  @media (max-width: 400px) {
    grid-template-columns: min-content;
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
export const WrapButton = styled.div`
  display: flex;
  bottom: 0%;
  padding: 0 2% ;
  justify-content: space-between;
  align-items: center;
`;

export const Button = styled.button`
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.3);
  border-radius: 4px;
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: 1.2px;
  text-align: center;
  color: #fff;
  background: #000000;;
  padding: 3%;
  min-width: min-content;
  :hover{
      background: #1b4b7d;;
  }
`;

export const TotalPrice = styled.p`
  font-size: 2.1rem;
  margin-bottom: -2px;
  font-weight: 600;
  @media (max-width: 370px) {
    font-size: 1.8rem;
  }
`;

export const HomeAnchor = styled(Link)`
  font-size: 1rem;
  margin: 2% auto;
`;

export const WrapFinishMessage = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #FFF;
  min-height: 250px;
  justify-content: center;
  align-content: center;
  align-items: center;

  & svg{

    color: #92C93D;
    width: 40px;
    height: 40px;
  }
`;
