import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { ContentLoading } from "../../common/loading";
import { ISignUpRequest } from "../api/dto/ISignUp";
import { signUp } from "../api/requests/signUp";

export type GetState = ContentLoading<ISignUpRequest | undefined>;

const initialState: GetState = {
  content: undefined,
  status: "init",
};

export const fetchRegistration = createAsyncThunk(
  "registration",
  async (params: ISignUpRequest) => {
    const response = await signUp(params);
    return response;
  },
);

const RegistrationSlice = createSlice({
  name: "fetchRegistration",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRegistration.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(fetchRegistration.fulfilled, (state) => {
      state.status = "loaded";
    });
    builder.addCase(fetchRegistration.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error;
    });
  },
});
export const { reducer: fetchRegistrationReducer } = RegistrationSlice;
