import "./App.css";

import React from "react";
import { ThemeProvider } from "styled-components";

import { theme } from "./core/theme/theme";
import { UIElements } from "./pages/UIElements";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <UIElements />
    </ThemeProvider>
  );
}

export default App;
