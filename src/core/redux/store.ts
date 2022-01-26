import { configureStore } from "@reduxjs/toolkit";

import { fetchAuthorizationReducer } from "../../modules/authorization/authorizationSlice";
import { getPlayersListReducer } from "../../modules/players/getPlayersSlice";
import { playerReducer } from "../../modules/players/playerSlices";
import { getPositionsReducer } from "../../modules/positions/getPositionsSlice";
import { getTeamsReducer } from "../../modules/teams/getTeamsSlice";
import { teamReducer } from "../../modules/teams/teamSlices";

export const store = configureStore({
  reducer: {
    authorization: fetchAuthorizationReducer,
    getTeams: getTeamsReducer,
    team: teamReducer,
    player: playerReducer,
    getPlayersList: getPlayersListReducer,
    getPositions: getPositionsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
