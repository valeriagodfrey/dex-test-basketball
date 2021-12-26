import { createSlice } from "@reduxjs/toolkit";

import { ContentLoading } from "../../common/loading";
import { IAddTeamsResponse } from "../../core/api/dto/IAddTeams";
import { addTeams } from "./addTeamsThunk";

export type GetAddTeamsState = ContentLoading<IAddTeamsResponse | undefined>;

const initialState: GetAddTeamsState = {
  content: undefined,
  status: "init",
};
const addTeamsSlice = createSlice({
  name: "addTeams",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addTeams.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(addTeams.fulfilled, (state, action) => {
      state.status = "loaded";
      state.content = action.payload;
    });
    builder.addCase(addTeams.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error;
    });
  },
});

export const { reducer: addTeamsReducer } = addTeamsSlice;
