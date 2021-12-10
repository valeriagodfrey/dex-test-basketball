import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ContentLoading } from "../../common/loading";
import { ISignInRequest } from "../api/dto/ISignIn";
import { signIn } from "../api/requests/signIn";

export type GetState = ContentLoading<ISignInRequest | undefined>;

const initialState: GetState = {
  content: undefined,
  status: "init",
};

export const fetchAuthorization = createAsyncThunk(
  "authorization",
  async (params: ISignInRequest) => {
    const response = await signIn(params);
    return response;
  },
);

const AuthorizationSlice = createSlice({
  name: "fetchAuthorization",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchAuthorization.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchAuthorization.fulfilled, (state) => {
      state.status = "loaded";
    });
    builder.addCase(fetchAuthorization.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error;
    });
  },
});
export const { reducer: fetchAuthorizationReducer } = AuthorizationSlice;
