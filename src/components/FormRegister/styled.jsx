import styled from 'styled-components';

export const Form = styled.form`
    width: 80%;
    max-width: 800px;
    height: 80vh;
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    margin: auto;
    margin-top: 2vh;
    padding: 0 2%;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
    border-radius: 4px;
`;

export const Title = styled.h3`
    font-size: 2.4rem;
    font-weight: 400;
    letter-spacing: -0.5px;
    margin: 0px;
`;

export const Image = styled.img`
    border: 1px solid #d9d9d9;
    background: #d9d9d9;
    box-shadow: 0px 10px 14px rgba(0, 0, 0, .2);
    height: auto;
    overflow: hidden;
    object-fit: cover;
    height: 575px;
    width: auto;
`;

export const Button = styled.button`
  font-size: 1.6rem;
  font-weight: 300;
  color: #fff;
  background: #000;
  border-radius: 8px;
  width: 45%;
  padding: 1.5%;
  align-self: center;
  box-shadow: 0 0px 1px rgb(0, 0, 0.15);
  :hover {
    box-shadow: 0 0px 5px rgb(0, 0, 0.45);
  }
`;

export const Input = styled.input`
    border: 0.2px solid rgba(80, 80, 80, 0.315);
    height: 1.6rem;
    font-size: 1.1rem;
    font-weight: 500;
    padding: 1.2%;
    letter-spacing: 0.8px;
    font-family: "Muli", sans-serif;
    ::placeholder {
    color: rgba(107, 107, 107, 0.534);
    }
`;

