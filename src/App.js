import React, { Component } from 'react';
import './App.css';
import theme from "./theme";
import { normalize } from "polished";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import { MainPage } from './scenes';
import store from './redux/store';
import { Provider } from 'react-redux';

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
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <div className="App">
            <GlobalStyle />
            <MainPage />
          </div>
        </ThemeProvider>
      </Provider>
    );
  }
}

export default App;
