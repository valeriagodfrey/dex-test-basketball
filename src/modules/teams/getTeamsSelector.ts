import { createSelector } from "@reduxjs/toolkit";

import { emptyArray } from "../../assets/constants/empty";
import { RootState } from "../../core/redux/store";
import { IOption } from "../../ui/select/data";

export const getTeamsOptionsSelector = createSelector(
  (state: RootState) => state.getTeamsList.content?.data || emptyArray,
  (state) => state.map((item): IOption => ({ value: item.id, label: item.name })),
);
