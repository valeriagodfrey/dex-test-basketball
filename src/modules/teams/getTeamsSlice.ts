import { createSlice } from "@reduxjs/toolkit";

import { IGetTeamsResponse } from "../../api/dto/IGetTeams";
import { ContentLoading } from "../../common/loading";
import { getTeams } from "./getTeamsThunk";

export type GetTeamsState = ContentLoading<IGetTeamsResponse | undefined>;
const initialState: GetTeamsState = {
  content: undefined,
  status: "init",
};

const getTeamsSlice = createSlice({
  name: "getTeams",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTeams.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getTeams.fulfilled, (state, action) => {
      state.status = "loaded";
      state.content = action.payload;
    });
    builder.addCase(getTeams.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error;
    });
  },
});

export const { reducer: getTeamsReducer } = getTeamsSlice;
