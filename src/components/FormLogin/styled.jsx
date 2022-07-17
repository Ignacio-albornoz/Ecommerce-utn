import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Form = styled.form`
    min-width: 276px;
    width: 80vw;
    max-width: 700px;
    height: inherit;
    display: flex;
    flex-direction:column;
    justify-content: space-evenly;
    align-items: center; 
`;

export const Title = styled.h3`
    font-size: 2.0rem;
    font-weight: 300;
    letter-spacing: -0.5px;
    margin: 0px;
    margin-bottom: 2%;
`;

export const H2 = styled.h2`
    font-size: 2.0rem;
    font-weight: 600;
    letter-spacing: -0.5px;
    margin: 0px;
    margin-bottom: 2%;
`;

export const P = styled.p`
    font-size: 1.4rem;
    font-weight: 300;
    letter-spacing: -0.5px;
    margin: 0px;
    margin-bottom: 2.5%;
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
  box-shadow: 0 0px 1px rgb(0, 0, 0.15);
  :hover {
    box-shadow: 0 0px 5px rgb(0, 0, 0.45);
  }
`;

export const Input = styled.input`
    width: 94%;
    border: 0.2px solid rgba(80, 80, 80, 0.315);
    height: 1.6rem;
    font-size: 1.1rem;
    margin: 3% 0;
    padding: 1%;
    letter-spacing: 0.8px;
    font-family: "Muli", sans-serif;
    ::placeholder {
    color: rgba(107, 107, 107, 0.534);
    }
    }
    :focus{
        border: 1.1px solid rgba(80, 80, 80, 0.5);
        outline: none;
    }
`;

export const LinkWrap = styled.button`
    border: none;
    margin: 3% 0;
    color: inherit;

`;

export const RegisterLink = styled(Link)`
    color: inherit;
`;

