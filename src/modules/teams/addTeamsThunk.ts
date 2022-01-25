import { createAsyncThunk } from "@reduxjs/toolkit";

import { IAddTeamsRequest } from "../../api/dto/IAddTeams";
import { addTeamsRequest } from "../../api/requests/teamsRequests";

export const addTeams = createAsyncThunk(
  "addTeams",
  async ({ params, onSuccess }: { params: IAddTeamsRequest; onSuccess: () => void }) => {
    const response = await addTeamsRequest(params);

    onSuccess();
    return response;
  },
);
