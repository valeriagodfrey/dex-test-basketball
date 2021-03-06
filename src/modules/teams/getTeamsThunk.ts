import { createAsyncThunk } from "@reduxjs/toolkit";

import { IGetTeamsParams } from "../../api/dto/IGetTeams";
import { getTeamsRequest } from "../../api/requests/teamsRequests";

export const getTeams = createAsyncThunk("getTeams", async (params?: IGetTeamsParams) => {
  const response = await getTeamsRequest(params);
  return response;
});
