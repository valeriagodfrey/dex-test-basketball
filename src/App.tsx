import "./App.css";
import "react-toastify/dist/ReactToastify.css";

import { useCallback, useEffect, useState } from "react";
import { Provider } from "react-redux";
import { Navigate, Routes } from "react-router";
import { BrowserRouter, Route } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import styled, { ThemeProvider } from "styled-components";

import { theme } from "./assets/theme/theme";
import { persistor, store } from "./core/redux/store";
import { Authorization } from "./pages/authorization/Authorization";
import { Registration } from "./pages/authorization/Registration";
import { Page404 } from "./pages/Page404";
import { Player } from "./pages/player/Player";
import { AddPlayer } from "./pages/playerAdd/AddPlayer";
import { EditPlayer } from "./pages/playerEdit/EditPlayer";
import { PlayersList } from "./pages/players/PlayersList";
import { Team } from "./pages/team/Team";
import { AddTeam } from "./pages/teamAdd/AddTeam";
import { EditTeam } from "./pages/teamEdit/EditTeam";
import { TeamsList } from "./pages/teams/TeamsList";
import { Header } from "./ui/header/Header";
import { Menu } from "./ui/menu/Menu";
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
      <PersistGate loading={null} persistor={persistor}>
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
              <PrivatePages>
                <Header />
                <Menu />
                <Routes>
                  <Route path="/teams" element={<TeamsList />} />
                  <Route path="/players" element={<PlayersList />} />
                  <Route path="/authorization" element={<Navigate to="/teams" />} />
                  <Route path="/registration" element={<Navigate to="/teams" />} />
                  <Route path="/" element={<Navigate to="/teams" />} />
                  <Route path="/teams/add" element={<AddTeam />} />
                  <Route path="/teams/:id" element={<Team />} />
                  <Route path="/teams/:id/edit" element={<EditTeam />} />
                  <Route path="/players/add" element={<AddPlayer />} />
                  <Route path="/players/:id" element={<Player />} />
                  <Route path="/players/:id/edit" element={<EditPlayer />} />
                  <Route path="*" element={<Page404 />} />
                </Routes>
              </PrivatePages>
            ) : (
              <Routes>
                <Route path="/authorization" element={<Authorization />} />
                <Route path="/registration" element={<Registration />} />
                <Route path="*" element={<Navigate to="/authorization" />} />
              </Routes>
            )}
          </BrowserRouter>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
}
const PrivatePages = styled.div``;
export default App;
