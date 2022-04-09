import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    max-width: 100%;
    border: 1px solid grey;
    font-family: 'Raleway', sans-serif;  
    }
  h1, h2, h3 {
    font-family: 'Exo 2', sans-serif;
  }
    nav {
        width: 70%;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        
    }
  h1, h2, h3 {
    font-family: 'Raleway', sans-serif;
  }
`;
