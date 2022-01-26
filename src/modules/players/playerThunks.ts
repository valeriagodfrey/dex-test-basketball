import { createAsyncThunk } from "@reduxjs/toolkit";

import { IAddPlayerRequest } from "../../api/dto/IAddPlayers";
import { IGetPlayerParams } from "../../api/dto/IGetPlayers";
import {
  addPlayerRequest,
  deletePlayerRequest,
  getPlayerRequest,
  updatePlayersRequest,
} from "../../api/requests/playersRequests";

export const addPlayer = createAsyncThunk(
  "addPlayers",
  async ({ params, onSuccess }: { params: IAddPlayerRequest; onSuccess: () => void }) => {
    const response = await addPlayerRequest(params);

    onSuccess();
    return response;
  },
);

export const deletePlayer = createAsyncThunk(
  "deletePlayer",
  async ({ params, onSuccess }: { params: IGetPlayerParams; onSuccess: () => void }) => {
    const response = await deletePlayerRequest(params);

    onSuccess();
    return response;
  },
);

export const getPlayer = createAsyncThunk("getPlayer", async (params?: IGetPlayerParams) => {
  const response = await getPlayerRequest(params);
  return response;
});

export const updatePlayer = createAsyncThunk(
  "updatePlayer",
  async ({ params, onSuccess }: { params: IAddPlayerRequest; onSuccess: () => void }) => {
    const response = await updatePlayersRequest(params);

    onSuccess();
    return response;
  },
);
