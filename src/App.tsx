import "./App.css";
import "react-toastify/dist/ReactToastify.minimal.css";

import React from "react";
import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
// import { ToastContainer } from "react-toastify";
import { ThemeProvider } from "styled-components";

import { theme } from "./core/theme/theme";
import Auth from "./pages/authorization";
import Registration from "./pages/registration";
import { UIElements } from "./pages/UIElements";

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <StyledContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={true}
        draggable
        pauseOnHover
      /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UIElements />}></Route>
          <Route path="/authorization" element={<Auth />}></Route>
          <Route path="/registration" element={<Registration />}></Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}
// const StyledContainer = styled(ToastContainer)`
//   .Toastify__toast-container {
//   }
//   .Toastify__toast--success {
//     background-color: ${({ theme }) => theme.colors.red};
//   }
//   .Toastify__toast-body {
//   }
//   .Toastify__progress-bar {
//   }
// `;
export default App;
