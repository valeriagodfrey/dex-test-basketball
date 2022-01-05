import { combineReducers } from "@reduxjs/toolkit";

import { fetchAuthorizationReducer } from "../../modules/authorization/authorizationSlise";
import { getPlayersReducer } from "../../modules/players/getPlayersSlice";
import { addTeamsReducer } from "../../modules/teams/addTeamsSlice";
import { getTeamReducer } from "../../modules/teams/getTeamSlice";
import { getTeamsReducer } from "../../modules/teams/getTeamsSlice";
import { updateTeamsReducer } from "../../modules/teams/updateTeamsSlice";

export const rootReducer = combineReducers({
  authorization: fetchAuthorizationReducer,
  getTeams: getTeamsReducer,
  getTeam: getTeamReducer,
  addTeams: addTeamsReducer,
  updateTeams: updateTeamsReducer,
  getPlayers: getPlayersReducer,
});
