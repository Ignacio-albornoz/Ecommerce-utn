import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        input::-webkit-outer-spin-button,
        input::-webkit-inner-spin-button {
            -webkit-appearance: none;
            margin: 0;
        }
        max-width: 1024px;
        margin: 0 auto;
        box-sizing: border-box;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-display: optional;
        color: ${(props) => props.themes.TextColor};
        background-color: ${(props) => props.themes.Background};
        scrollbar-width: none;
        @media (max-width: 768px) {
        font-size: 16px;
        }   
        @media (max-width: 600px) {
        font-size: 14px;
        }
        @media (max-width: 420px) {
        font-size: 12px;
        }

    
    }
    
    button {
        background: transparent;
        border: 0;
        outline: 0;
        & svg {
            color: ${(props) => props.themes.TextColor};
        }
    }

    body {
        background: #fefefe;
        background-color: ${(props) => props.themes.SecondaryBackgroundColor};
        height: 100vh;
        margin: 0 auto;
        max-width: 100vw;
        overscroll-behavior: none;
        width: 100%;
        scrollbar-width: none;
        &{
            background-color: ${(props) => props.themes.Background};
        }
    }


    #Layout{
        background: ${(props) => props.themes.SecondaryBackgroundColor}
    }


    form {
        background: ${(props) => props.themes.SecondaryBackgroundColor};

    }

    input {
        background: ${(props) => props.themes.Background};
        color: ${(props) => props.themes.TextColor};
    }
    
    #app {
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
        overflow-x: hidden;
        min-height: 100vh;
        padding-bottom: 10px;
    }
    .react-responsive-modal-modal {
        background: ${(props) => props.themes.SecondaryBackgroundColor};
    }

    @media (max-height: 600px) {
    font-size: 12px;
    }

    ul, li, h1, h2, h3, p, button { margin: 0; padding: 0; }
    ul { list-style: none; }
}
`;

export default GlobalStyle;
