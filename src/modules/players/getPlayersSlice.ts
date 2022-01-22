import { createSlice } from "@reduxjs/toolkit";

import { IGetPlayersResponse } from "../../api/dto/IGetPlayers";
import { ContentLoading } from "../../common/loading";
import { getPlayers } from "./getPlayersThunk";

export type GetPlayersState = ContentLoading<IGetPlayersResponse | undefined>;
const initialState: GetPlayersState = {
  content: undefined,
  status: "init",
};

const getPlayersSlice = createSlice({
  name: "getPlayers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPlayers.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getPlayers.fulfilled, (state, action) => {
      state.status = "loaded";
      state.content = action.payload;
    });
    builder.addCase(getPlayers.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error;
    });
  },
});

export const { reducer: getPlayersReducer } = getPlayersSlice;
