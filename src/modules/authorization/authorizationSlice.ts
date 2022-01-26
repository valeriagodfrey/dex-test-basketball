import { createSlice } from "@reduxjs/toolkit";

import { IRegistrationResponse } from "../../api/dto/ISignIn";
import { ContentLoading } from "../../common/loading";
import { fetchAuthorization, fetchRegistration } from "./authorizationThunk";

export type GetState = ContentLoading<IRegistrationResponse | undefined>;

const initialState: GetState = {
  content: undefined,
  status: "init",
};

const authorizationSlice = createSlice({
  name: "fetchAuthorization",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAuthorization.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchAuthorization.fulfilled, (state, action) => {
      state.status = "loaded";
      state.content = action.payload;
    });
    builder.addCase(fetchAuthorization.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error;
    });
    builder.addCase(fetchRegistration.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchRegistration.fulfilled, (state, action) => {
      state.status = "loaded";
      state.content = action.payload;
    });
    builder.addCase(fetchRegistration.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error;
    });
  },
});
export const { reducer: fetchAuthorizationReducer } = authorizationSlice;
