import { createSlice } from "@reduxjs/toolkit";

import { IGetTeamResponse } from "../../api/dto/IGetTeams";
import { ContentLoading } from "../../common/loading";
import { deleteTeam } from "./deleteTeamThunk";

export type GetDeleteTeamState = ContentLoading<IGetTeamResponse | undefined>;

const initialState: GetDeleteTeamState = {
  content: undefined,
  status: "init",
};
const deleteTeamSlice = createSlice({
  name: "deleteTeam",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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
  },
});

export const { reducer: deleteTeamReducer } = deleteTeamSlice;
