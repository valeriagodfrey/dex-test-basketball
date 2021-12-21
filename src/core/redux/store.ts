import { configureStore } from "@reduxjs/toolkit";

import { fetchAuthorizationReducer } from "../../modules/authorization/authorizationSlise";
import { getTeamsReducer } from "../../modules/teams/getTeamsSlice";

export const store = configureStore({
  reducer: {
    authorization: fetchAuthorizationReducer,
    getTeams: getTeamsReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
