import { createSlice } from "@reduxjs/toolkit";

import { ContentLoading } from "../../common/loading";
import { IGetTeamResponse } from "../../core/api/dto/IGetTeams";
import { getTeam } from "./getTeamThunk";

export type GetTeamState = ContentLoading<IGetTeamResponse | undefined>;
const initialState: GetTeamState = {
  content: undefined,
  status: "init",
};

const getTeamSlice = createSlice({
  name: "getTeam",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getTeam.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getTeam.fulfilled, (state, action) => {
      state.status = "loaded";
      state.content = action.payload;
    });
    builder.addCase(getTeam.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error;
    });
  },
});

export const { reducer: getTeamReducer } = getTeamSlice;
