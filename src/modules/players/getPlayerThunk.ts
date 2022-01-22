import { createAsyncThunk } from "@reduxjs/toolkit";

import { IGetPlayerParams } from "../../api/dto/IGetPlayers";
import { getPlayerRequest } from "../../api/requests/getPlayerRequest";

export const getPlayer = createAsyncThunk("getPlayer", async (params?: IGetPlayerParams) => {
  const response = await getPlayerRequest(params);
  return response;
});
