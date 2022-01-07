import { createAsyncThunk } from "@reduxjs/toolkit";

import { IAddPlayersRequest } from "../../core/api/dto/IAddPlayers";
import { addPlayersRequest } from "../../core/api/requests/addPlayersRequest";

export const addPlayers = createAsyncThunk(
  "addPlayers",
  async ({ params, onSuccess }: { params: IAddPlayersRequest; onSuccess: () => void }) => {
    const response = await addPlayersRequest(params);

    onSuccess();
    return response;
  },
);
