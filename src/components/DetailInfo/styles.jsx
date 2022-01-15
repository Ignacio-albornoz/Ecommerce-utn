import styled from 'styled-components';

export const WrapDetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  text-align: start;
  width: 98%;
  padding: 2%;
`;

export const Title = styled.h3`
  font-weight: 600;
  letter-spacing: -1.2px;
  font-size: 1.5rem;
  color: inherit;
  margin-bottom: 5px;
  width: 95%;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row-reverse;
  align-items: center;
  justify-content: space-between;
  max-width: 680px;
  width: 98%;
  padding: 1%;
`;

export const Price = styled.h3`
  font-weight: 600;
  letter-spacing: -0.2px;
  font-size: 2.5rem;
  color: inherit;
  margin-bottom: 7px;
`;

export const Info = styled.p`
  font-weight: 300;
  width: 95%;
  letter-spacing: -0.7px;
  font-size: 1rem;
  color: inherit;
  -webkit-user-modify: read-write-plaintext-only;
`;

export const ButtonComprar = styled.button`
  font-size: 2rem;
  font-weight: 300;
  color: #fff;
  background: #000;
  border-radius: 8px;
  width: 45%;
  padding: 1.5%;
  box-shadow: 0 0px 1px rgb(0, 0, 0.15);
  :hover {
    box-shadow: 0 0px 5px rgb(0, 0, 0.45);
  }
`;
