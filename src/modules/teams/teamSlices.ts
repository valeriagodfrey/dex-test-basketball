import { createSlice } from "@reduxjs/toolkit";

import { IAddTeamResponse } from "../../api/dto/IAddTeams";
import { IGetTeamResponse } from "../../api/dto/IGetTeams";
import { ContentLoading } from "../../common/loading";
import { addTeam, deleteTeam, getTeam, updateTeam } from "./teamThunks";

export type TeamState = ContentLoading<IGetTeamResponse | undefined>;
export type AddTeamState = ContentLoading<IAddTeamResponse | undefined>;

const initialState: TeamState = {
  content: undefined,
  status: "init",
};
const teamSlice = createSlice({
  name: "team",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addTeam.pending, (state: AddTeamState) => {
      state.status = "loading";
    });
    builder.addCase(addTeam.fulfilled, (state: AddTeamState, action) => {
      state.status = "loaded";
      state.content = action.payload;
    });
    builder.addCase(addTeam.rejected, (state: AddTeamState, action) => {
      state.status = "error";
      state.error = action.error;
    });

    builder.addCase(deleteTeam.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(deleteTeam.fulfilled, (state, action) => {
      state.status = "loaded";
      state.content = action.payload;
    });
    builder.addCase(deleteTeam.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error;
    });

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

    builder.addCase(updateTeam.pending, (state: AddTeamState) => {
      state.status = "loading";
    });
    builder.addCase(updateTeam.fulfilled, (state: AddTeamState, action) => {
      state.status = "loaded";
      state.content = action.payload;
    });
    builder.addCase(updateTeam.rejected, (state: AddTeamState, action) => {
      state.status = "error";
      state.error = action.error;
    });
  },
});

export const { reducer: teamReducer } = teamSlice;
