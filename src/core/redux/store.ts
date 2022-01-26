import { configureStore } from "@reduxjs/toolkit";

import { fetchAuthorizationReducer } from "../../modules/authorization/authorizationSlice";
import { getPlayersListReducer } from "../../modules/players/getPlayersSlice";
import { playerReducer } from "../../modules/players/playerSlices";
import { getPositionsReducer } from "../../modules/positions/getPositionsSlice";
import { addTeamsReducer } from "../../modules/teams/addTeamsSlice";
import { deleteTeamReducer } from "../../modules/teams/deleteTeamSlice";
import { getTeamReducer } from "../../modules/teams/getTeamSlice";
import { getTeamsReducer } from "../../modules/teams/getTeamsSlice";
import { updateTeamsReducer } from "../../modules/teams/updateTeamsSlice";

export const store = configureStore({
  reducer: {
    authorization: fetchAuthorizationReducer,
    getTeams: getTeamsReducer,
    getTeam: getTeamReducer,
    addTeams: addTeamsReducer,
    deleteTeam: deleteTeamReducer,
    updateTeams: updateTeamsReducer,
    player: playerReducer,
    getPlayersList: getPlayersListReducer,
    getPositions: getPositionsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
