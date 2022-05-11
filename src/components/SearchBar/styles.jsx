import styled from 'styled-components';

export const WrapBarSearch = styled.div`
  display: flex;
  width: 50%;
  min-width: 280px;
  max-width: 860px;
  height: 2.4rem;
  align-items: center;
  text-align: center;
  flex-direction: row;
  position: fixed;
  background: transparent;
  z-index: 2;
  padding-left: 1.5%;
  padding-right: 3%;
  background: inherit;
  left: 0;
  right: 0;
  margin: auto;
  top: 5rem;
  border-radius: 2px;
  padding: 0;
  transition: clip-path 0.35s ease-in-out;
  clip-path: ${({ open }) => (open ? 'circle(150% at 100% 0%)' : 'circle(0% at 100% 0%)')};
  box-shadow: 0 3px 5px rgb(0 0 0 / 80%);
`;

export const Form = styled.input`
  width: 94%;
  font-size: 1.4rem;
  font-weight: 300;
  height: inherit;
  padding: 0;
  color: black;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background: #fff;
  border-style: none;
  padding-left: 5%;
  font-family: -apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,sans-serif;
  input:focus {
    outline-offset: none;
  }

  :focus {
    outline: none;
  }
`;
export const ButtonSearcher = styled.button`
  width: 2rem;
  height: inherit;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  border-left: 1px solid rgba(0, 0, 0, 0.05);
  border-top: 1px solid rgba(0, 0, 0, 0.05);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  background: #fff;

  svg{
    width: 1.2rem;
    height: 1.2rem;
  }
`;
