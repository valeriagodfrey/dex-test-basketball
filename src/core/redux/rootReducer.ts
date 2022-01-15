import { combineReducers } from "@reduxjs/toolkit";

import { fetchAuthorizationReducer } from "../../modules/authorization/authorizationSlise";
import { addPlayersReducer } from "../../modules/players/addPlayersSlice";
import { deletePlayerReducer } from "../../modules/players/deletePlayerSlice";
import { getPlayerReducer } from "../../modules/players/getPlayerSlice";
import { getPlayersReducer } from "../../modules/players/getPlayersSlice";
import { updatePlayersReducer } from "../../modules/players/updatePlayersSlice";
import { getPositionsReducer } from "../../modules/positions/getPositionsSlice";
import { addTeamsReducer } from "../../modules/teams/addTeamsSlice";
import { deleteTeamReducer } from "../../modules/teams/deleteTeamSlice";
import { getTeamReducer } from "../../modules/teams/getTeamSlice";
import { getTeamsReducer } from "../../modules/teams/getTeamsSlice";
import { updateTeamsReducer } from "../../modules/teams/updateTeamsSlice";

export const rootReducer = combineReducers({
  authorization: fetchAuthorizationReducer,
  getTeams: getTeamsReducer,
  getTeam: getTeamReducer,
  addTeams: addTeamsReducer,
  deleteTeam: deleteTeamReducer,
  updateTeams: updateTeamsReducer,
  getPlayers: getPlayersReducer,
  getPlayer: getPlayerReducer,
  addPlayers: addPlayersReducer,
  updatePlayers: updatePlayersReducer,
  deletePLayers: deletePlayerReducer,
  getPositions: getPositionsReducer,
});
