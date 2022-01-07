import { createAsyncThunk } from "@reduxjs/toolkit";

import { IAddTeamsRequest } from "../../core/api/dto/IAddTeams";
import { updateTeamsRequest } from "../../core/api/requests/updateTeamsRequest";

export const updateTeams = createAsyncThunk(
  "updateTeams",
  async ({ params, onSuccess }: { params: IAddTeamsRequest; onSuccess: () => void }) => {
    const response = await updateTeamsRequest(params);

    onSuccess();
    return response;
  },
);
