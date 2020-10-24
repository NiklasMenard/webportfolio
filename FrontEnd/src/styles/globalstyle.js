import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  body {
    background-color: black;
    margin: 1rem;
  }
  
  h1, h3, p, ul, a {
    color:rgb(253, 255, 254);
    font-family:'Courier New', Courier, monospace;
  }

  button {
    border: 1px solid #1a202c;
    padding: 8px;   
    border-radius: 0.5rem;
  }
  button:hover {
    background-color: #a8f0b3;
  }
`
export default GlobalStyle