import { createSlice } from "@reduxjs/toolkit";

import { ContentLoading } from "../../common/loading";
import { IGetPlayerResponse } from "../../core/api/dto/IGetPlayers";
import { deletePlayer } from "./deletePlayerThunk";

export type GetDeletePlayerState = ContentLoading<IGetPlayerResponse | undefined>;

const initialState: GetDeletePlayerState = {
  content: undefined,
  status: "init",
};
const deletePlayerSlice = createSlice({
  name: "deletePlayer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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
  },
});

export const { reducer: deletePlayerReducer } = deletePlayerSlice;
