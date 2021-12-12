import { configureStore } from "@reduxjs/toolkit";

import { fetchAuthorizationReducer } from "../../modules/authorization/authorizationSlise";

export const store = configureStore({
  reducer: {
    authorizationReducer: fetchAuthorizationReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
