import { createSlice } from "@reduxjs/toolkit";

import { IPosition } from "../../api/dto/IGetPositions";
import { ContentLoading } from "../../common/loading";
import { IOption } from "../../ui/select/data";
import { getPositions } from "./getPositionsThunk";

export type GetAddTeamsState = ContentLoading<IOption[] | undefined>;

const initialState: GetAddTeamsState = {
  content: undefined,
  status: "init",
};
const getPositionsSlice = createSlice({
  name: "getPositions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPositions.pending, (state) => {
      state.status = "loading";
    });
    builder.addCase(getPositions.fulfilled, (state, action) => {
      state.status = "loaded";
      state.content = (action.payload || []).map((item) => ({
        value: item,
        label: getPositionsTexts[item],
      }));
    });
    builder.addCase(getPositions.rejected, (state, action) => {
      state.status = "error";
      state.error = action.error;
    });
  },
});

const getPositionsTexts: { [key in IPosition]: string } = {
  Center: "Center",
  CenterForward: "Center Forward",
  Forward: "Forward",
  Guard: "Guard",
  GuardForward: "Guard Forward",
};

export const { reducer: getPositionsReducer } = getPositionsSlice;
