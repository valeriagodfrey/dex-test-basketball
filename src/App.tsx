import "./App.css";

import React from "react";
import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { theme } from "./core/theme/theme";
import { UIElements } from "./pages/UIElements";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UIElements />}></Route>
          <Route path="/players" element={<div>Hello</div>}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
