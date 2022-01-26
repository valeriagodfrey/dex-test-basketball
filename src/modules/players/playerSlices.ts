import { createSlice } from "@reduxjs/toolkit";

import { IAddPlayerResponse } from "../../api/dto/IAddPlayers";
import { IGetPlayerResponse } from "../../api/dto/IGetPlayers";
import { ContentLoading } from "../../common/loading";
import { addPlayer, deletePlayer, getPlayer, updatePlayer } from "./playerThunks";

export type PlayerState = ContentLoading<IGetPlayerResponse | undefined>;
export type AddPlayerState = ContentLoading<IAddPlayerResponse | undefined>;

const initialState: PlayerState = {
  content: undefined,
  status: "init",
};
const playerSlice = createSlice({
  name: "player",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addPlayer.pending, (state: AddPlayerState) => {
      state.status = "loading";
    });
    builder.addCase(addPlayer.fulfilled, (state: AddPlayerState, action) => {
      state.status = "loaded";
      state.content = action.payload;
    });
    builder.addCase(addPlayer.rejected, (state: AddPlayerState, action) => {
      state.status = "error";
      state.error = action.error;
    });

    builder.addCase(deletePlayer.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(deletePlayer.fulfilled, (state, action) => {
      state.status = "loaded";
      state.content = action.payload;
    });
    builder.addCase(deletePlayer.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error;
    });

    builder.addCase(getPlayer.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getPlayer.fulfilled, (state, action) => {
      state.status = "loaded";
      state.content = action.payload;
    });
    builder.addCase(getPlayer.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error;
    });

    builder.addCase(updatePlayer.pending, (state: AddPlayerState) => {
      state.status = "loading";
    });
    builder.addCase(updatePlayer.fulfilled, (state: AddPlayerState, action) => {
      state.status = "loaded";
      state.content = action.payload;
    });
    builder.addCase(updatePlayer.rejected, (state: AddPlayerState, action) => {
      state.status = "error";
      state.error = action.error;
    });
  },
});

export const { reducer: playerReducer } = playerSlice;
