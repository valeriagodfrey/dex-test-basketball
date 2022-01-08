import { createSelector } from "@reduxjs/toolkit";

import { RootState } from "../../core/redux/store";

export const getPositionsSelector = createSelector(
  (state: RootState) => state.getPositions.content,
  (state) => state,
);

export const getPositionsDisabledSelector = createSelector(
  (state: RootState) => state.getPositions.status === "loading",
  (state) => state,
);
