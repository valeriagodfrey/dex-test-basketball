import { createAsyncThunk } from "@reduxjs/toolkit";

import { IGetTeamsParams } from "../../core/api/dto/IGetTeams";
import { getTeamsRequest } from "../../core/api/requests/getTeamsRequest";

export const getTeams = createAsyncThunk("getTeams", async (params?: IGetTeamsParams) => {
  const response = await getTeamsRequest(params);
  return response;
});
