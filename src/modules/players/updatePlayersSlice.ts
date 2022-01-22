import { createSlice } from "@reduxjs/toolkit";

import { IAddPlayersResponse } from "../../api/dto/IAddPlayers";
import { ContentLoading } from "../../common/loading";
import { updatePlayers } from "./updatePlayersThunk";

export type GetUpdatePlayersState = ContentLoading<IAddPlayersResponse | undefined>;

const initialState: GetUpdatePlayersState = {
  content: undefined,
  status: "init",
};
const updatePlayersSlice = createSlice({
  name: "updatePlayers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(updatePlayers.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(updatePlayers.fulfilled, (state, action) => {
      state.status = "loaded";
      state.content = action.payload;
    });
    builder.addCase(updatePlayers.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error;
    });
  },
});

export const { reducer: updatePlayersReducer } = updatePlayersSlice;
