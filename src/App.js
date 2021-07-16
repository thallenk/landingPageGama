import React from 'react';
import Routes from './routes';
import { createGlobalStyle } from 'styled-components'
import img from '../src/assets/images/products/background.png'



const GlobalStyle = createGlobalStyle`

      //Reset CSS
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    background-image: url(${img});
    //background-size: cover;
    font-family: sans-serif;
    width: 1100px;
    margin-left: auto;
    margin-right:auto;
    
  }

  img {
    max-width: 100%;
    height: auto;
    display: block;
    border-radius: 8px;
  }
`;






function App() {
  return (
    <>
      <GlobalStyle />
      <Routes/>
    </>
  );
}

export default App;
