import React, { Component } from 'react';
import './App.css';
import theme from "./theme";
import { normalize } from "polished";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { MainPage } from './scenes';

const GlobalStyle = createGlobalStyle`
  ${normalize()};
  body {
    font-family: ${theme.fonts.sans};
    background-color: ${() => theme.colors.mediumGray};
  }
`;

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <GlobalStyle />
          <MainPage />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
