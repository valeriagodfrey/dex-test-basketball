import { createSlice } from "@reduxjs/toolkit";

import { IGetPlayerResponse } from "../../api/dto/IGetPlayers";
import { ContentLoading } from "../../common/loading";
import { getPlayer } from "./getPlayerThunk";

export type GetPlayerState = ContentLoading<IGetPlayerResponse | undefined>;
const initialState: GetPlayerState = {
  content: undefined,
  status: "init",
};

const getPlayerSlice = createSlice({
  name: "getPlayer",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
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
  },
});

export const { reducer: getPlayerReducer } = getPlayerSlice;
