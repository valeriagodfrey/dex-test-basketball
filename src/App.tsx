import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import React, { useState } from "react";
import { Provider } from "react-redux";
import { Navigate, Routes } from "react-router";
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
  const [token, setToken] = useState(localStorage.getItem("token"));
  window.addEventListener(
    "storage",
    function (event) {
      if (event.storageArea === localStorage) {
        setToken(localStorage.getItem("token"));
      }
    },
    false,
  );
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <StyledContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss={true}
          draggable
          pauseOnHover
        />
        <BrowserRouter>
          {token !== null ? (
            <Routes>
              <Route path="/" element={<UIElements />}></Route>
              <Route path="/authorization" element={<Navigate to="/" />}></Route>
              <Route path="/registration" element={<Navigate to="/" />}></Route>
            </Routes>
          ) : (
            <Routes>
              <Route path="/authorization" element={<Auth />}></Route>
              <Route path="/registration" element={<Registration />}></Route>
              <Route path="*" element={<Navigate to="/authorization" />} />
            </Routes>
          )}
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}
const StyledContainer = styled(ToastContainer)`
  .Toastify__toast-container {
  }
  .Toastify__toast--success {
    background-color: ${({ theme }) => theme.colors.red};
    color: ${({ theme }) => theme.colors.white};
  }
  .Toastify__toast-body {
  }
  .Toastify__progress-bar {
  }
`;
export default App;
