import { configureStore } from "@reduxjs/toolkit";

import { fetchAuthorizationReducer } from "./fetchAuthorizationSlice";
import { fetchRegistrationReducer } from "./fetchRegistrationSlice";

export const store = configureStore({
  reducer: {
    authorizationReducer: fetchAuthorizationReducer,
    registrationReducer: fetchRegistrationReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
