import { createAsyncThunk } from "@reduxjs/toolkit";

import { getPositionsRequest } from "../../core/api/requests/getPositionsRequest";

export const getPositions = createAsyncThunk("addTeams", async () => await getPositionsRequest());
