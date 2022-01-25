import { createAsyncThunk } from "@reduxjs/toolkit";

import { IAddTeamsRequest } from "../../api/dto/IAddTeams";
import { updateTeamsRequest } from "../../api/requests/teamsRequests";

export const updateTeams = createAsyncThunk(
  "updateTeams",
  async ({ params, onSuccess }: { params: IAddTeamsRequest; onSuccess: () => void }) => {
    const response = await updateTeamsRequest(params);

    onSuccess();
    return response;
  },
);
