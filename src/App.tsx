import "./App.css";
import "react-toastify/dist/ReactToastify.minimal.css";

import React from "react";
import { Provider } from "react-redux";
import { Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
// import { ToastContainer } from "react-toastify";
import styled, { ThemeProvider } from "styled-components";

import { store } from "./core/redux/store";
import { theme } from "./core/theme/theme";
import Auth from "./pages/authorization/authorization";
import Registration from "./pages/authorization/registration";
import { UIElements } from "./pages/UIElements";

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {/* <ToastContainer
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
    </Provider>
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
