import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import React, { useCallback, useEffect, useState } from "react";
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
import { TeamsList } from "./pages/teams/teamsList";
import { UIElements } from "./pages/UIElements";

function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  const onChangeStorage = useCallback(() => {
    const newToken = localStorage.getItem("token");
    if (newToken !== token) {
      setToken(newToken);
    }
  }, [token]);

  useEffect(() => {
    window.addEventListener("storage", onChangeStorage);

    return () => window.removeEventListener("storage", onChangeStorage);
  }, [onChangeStorage]);
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
              <Route path="/" element={<TeamsList />}></Route>
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
  .Toastify__toast--error {
    background-color: ${({ theme }) => theme.colors.lightRed};
  }
  .Toastify__toast-theme--light {
    color: var(--toastify-color-light);
  }
  .Toastify__toast {
    min-height: 24px;
    display: flex;
  }
  svg {
    width: 100%;
    height: 100%;
    display: none;
  }

  .Toastify__toast-body {
    padding: 3px 16px;
    margin: 0;
    display: block;
  }
  .Toastify_toast-icon {
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
  }
  .Toastify__progress-bar--error {
    background: var(--toastify-color-null);
  }
  .Toastify__zoom-enter {
    animation-name: null;
  }
`;
export default App;
