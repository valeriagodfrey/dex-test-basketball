import "./App.css";

import React from "react";
import styled, { ThemeProvider } from "styled-components";

import { theme } from "./core/theme/theme";
import logo from "./logo.svg";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.tsx</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </Header>
      </div>
    </ThemeProvider>
  );
}

const Header = styled.header``;

export default App;
