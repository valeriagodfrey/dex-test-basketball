import { createAsyncThunk } from "@reduxjs/toolkit";

import { getPositionsRequest } from "../../api/requests/playersRequests";

export const getPositions = createAsyncThunk(
  "getPositions",
  async () => await getPositionsRequest(),
);
