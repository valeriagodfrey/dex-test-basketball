import { createAsyncThunk } from "@reduxjs/toolkit";

import { IGetPlayerParams } from "../../core/api/dto/IGetPlayers";
import { getPlayerRequest } from "../../core/api/requests/getPlayerRequest";

export const getPlayer = createAsyncThunk("getPlayer", async (params?: IGetPlayerParams) => {
  const response = await getPlayerRequest(params);
  return response;
});
