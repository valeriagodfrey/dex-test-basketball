import { createSlice } from "@reduxjs/toolkit";

import { IAddTeamsResponse } from "../../api/dto/IAddTeams";
import { ContentLoading } from "../../common/loading";
import { updateTeams } from "./updateTeamsThunk";

export type GetUpdateTeamsState = ContentLoading<IAddTeamsResponse | undefined>;

const initialState: GetUpdateTeamsState = {
  content: undefined,
  status: "init",
};
const updateTeamsSlice = createSlice({
  name: "updateTeams",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updateTeams.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(updateTeams.fulfilled, (state, action) => {
      state.status = "loaded";
      state.content = action.payload;
    });
    builder.addCase(updateTeams.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error;
    });
  },
});

export const { reducer: updateTeamsReducer } = updateTeamsSlice;
