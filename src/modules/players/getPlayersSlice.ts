import { createSlice } from "@reduxjs/toolkit";

import { IGetPlayersResponse } from "../../api/dto/IGetPlayers";
import { ContentLoading } from "../../common/loading";
import { getPlayers } from "./getPlayersThunk";

export type GetPlayersListState = ContentLoading<IGetPlayersResponse | undefined>;
const initialState: GetPlayersListState = {
  content: undefined,
  status: "init",
};

const getPlayersListSlice = createSlice({
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

export const { reducer: getPlayersListReducer } = getPlayersListSlice;
