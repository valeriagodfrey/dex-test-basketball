import { createAsyncThunk } from "@reduxjs/toolkit";

import { IAddPlayersRequest } from "../../api/dto/IAddPlayers";
import { updatePlayersRequest } from "../../api/requests/updatePlayersRequest";

export const updatePlayers = createAsyncThunk(
  "updatePlayers",
  async ({ params, onSuccess }: { params: IAddPlayersRequest; onSuccess: () => void }) => {
    const response = await updatePlayersRequest(params);

    onSuccess();
    return response;
  },
);
