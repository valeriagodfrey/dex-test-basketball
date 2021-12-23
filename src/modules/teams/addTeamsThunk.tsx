import { createAsyncThunk } from "@reduxjs/toolkit";

import { IAddTeamsRequest } from "../../core/api/dto/IAddTeams";
import { addTeamsRequest } from "../../core/api/requests/addTeamsRequest";

export const addTeams = createAsyncThunk("registration", async (params: IAddTeamsRequest) => {
  const response = await addTeamsRequest(params);
  return response;
});
