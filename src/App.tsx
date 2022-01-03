import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import React, { useCallback, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Navigate, Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import { store } from "./core/redux/store";
import { theme } from "./core/theme/theme";
import { Authorization } from "./pages/authorization/Authorization";
import { Registration } from "./pages/authorization/Registration";
import { PlayersList } from "./pages/players/PlayersList";
import { AddTeam } from "./pages/teams/AddTeam";
import { TeamsList } from "./pages/teams/TeamsList";
import { StyledToastContainer } from "./ui/notification/Notification";

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
        <StyledToastContainer
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
              <Route path="/teams" element={<TeamsList />}></Route>
              <Route path="/players" element={<PlayersList />}></Route>
              <Route path="/authorization" element={<Navigate to="/teams" />}></Route>
              <Route path="/registration" element={<Navigate to="/teams" />}></Route>
              <Route path="/teams/add" element={<AddTeam />}></Route>
            </Routes>
          ) : (
            <Routes>
              <Route path="/authorization" element={<Authorization />}></Route>
              <Route path="/registration" element={<Registration />}></Route>
              <Route path="*" element={<Navigate to="/authorization" />} />
            </Routes>
          )}
        </BrowserRouter>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
