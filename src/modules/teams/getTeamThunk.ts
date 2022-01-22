import { createAsyncThunk } from "@reduxjs/toolkit";

import { IGetTeamParams } from "../../api/dto/IGetTeams";
import { getTeamRequest } from "../../api/requests/getTeamRequest";

export const getTeam = createAsyncThunk("getTeam", async (params?: IGetTeamParams) => {
  const response = await getTeamRequest(params);
  return response;
});
