import { createAsyncThunk } from "@reduxjs/toolkit";

import { IGetPlayerParams } from "../../api/dto/IGetPlayers";
import { deletePlayerRequest } from "../../api/requests/deletePlayerRequest";

export const deletePlayer = createAsyncThunk(
  "deletePlayer",
  async ({ params, onSuccess }: { params: IGetPlayerParams; onSuccess: () => void }) => {
    const response = await deletePlayerRequest(params);

    onSuccess();
    return response;
  },
);
