import { createAsyncThunk } from "@reduxjs/toolkit";

import { IGetPlayersParams } from "../../api/dto/IGetPlayers";
import { getPlayersRequest } from "../../api/requests/playersRequests";

export const getPlayers = createAsyncThunk("getPlayers", async (params?: IGetPlayersParams) => {
  const response = await getPlayersRequest(params);
  return response;
});
