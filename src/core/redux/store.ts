import { configureStore } from "@reduxjs/toolkit";

import { fetchAuthorizationReducer } from "../../modules/authorization/authorizationSlise";
import { addTeamsReducer } from "../../modules/teams/addTeamsSlice";
import { getTeamsReducer } from "../../modules/teams/getTeamsSlice";

export const store = configureStore({
  reducer: {
    authorization: fetchAuthorizationReducer,
    getTeams: getTeamsReducer,
    addTeams: addTeamsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
