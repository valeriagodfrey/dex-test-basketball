import { combineReducers } from "@reduxjs/toolkit";

import { fetchAuthorizationReducer } from "../../modules/authorization/authorizationSlise";
import { getPlayersReducer } from "../../modules/players/getPlayersSlice";
import { addTeamsReducer } from "../../modules/teams/addTeamsSlice";
import { getTeamsReducer } from "../../modules/teams/getTeamsSlice";

export const rootReducer = combineReducers({
  authorization: fetchAuthorizationReducer,
  getTeams: getTeamsReducer,
  addTeams: addTeamsReducer,
  getPlayers: getPlayersReducer,
});
