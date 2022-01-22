import { createSlice } from "@reduxjs/toolkit";

import { IAddPlayersResponse } from "../../api/dto/IAddPlayers";
import { ContentLoading } from "../../common/loading";
import { addPlayers } from "./addPlayersThunk";

export type GetAddPlayersState = ContentLoading<IAddPlayersResponse | undefined>;

const initialState: GetAddPlayersState = {
  content: undefined,
  status: "init",
};
const addPlayersSlice = createSlice({
  name: "addPlayers",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addPlayers.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(addPlayers.fulfilled, (state, action) => {
      state.status = "loaded";
      state.content = action.payload;
    });
    builder.addCase(addPlayers.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error;
    });
  },
});

export const { reducer: addPlayersReducer } = addPlayersSlice;
