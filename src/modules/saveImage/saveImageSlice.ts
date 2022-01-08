import { createSlice } from "@reduxjs/toolkit";

import { ContentLoading } from "../../common/loading";
import { ISaveImageResponse } from "../../core/api/dto/ISaveImage";
import { saveImage } from "./saveImageThunk";

export type GetAddTeamsState = ContentLoading<ISaveImageResponse | undefined>;

const initialState: GetAddTeamsState = {
  content: undefined,
  status: "init",
};
const saveImageSlice = createSlice({
  name: "saveImage",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(saveImage.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(saveImage.fulfilled, (state, action) => {
      state.status = "loaded";
      state.content = action.payload;
    });
    builder.addCase(saveImage.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error;
    });
  },
});

export const { reducer: saveImageReducer } = saveImageSlice;
