import styled from 'styled-components';

export const Container = styled.div`
  max-height: 85vh;
  max-width: 84vw;
  min-width: 280px;
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
