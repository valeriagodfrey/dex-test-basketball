import { createAsyncThunk } from "@reduxjs/toolkit";

import { IGetPlayersParams } from "../../core/api/dto/IGetPlayers";
import { getPlayersRequest } from "../../core/api/requests/getPlayersRequest";

export const getPlayers = createAsyncThunk("getPlayers", async (params?: IGetPlayersParams) => {
  const response = await getPlayersRequest(params);
  return response;
});
