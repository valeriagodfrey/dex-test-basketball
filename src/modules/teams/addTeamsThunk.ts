import { createAsyncThunk } from "@reduxjs/toolkit";

import { IAddTeamsRequest } from "../../core/api/dto/IAddTeams";
import { addTeamsRequest } from "../../core/api/requests/addTeamsRequest";

export const addTeams = createAsyncThunk(
  "addTeams",
  async ({ params, onSuccess }: { params: IAddTeamsRequest; onSuccess: () => void }) => {
    const response = await addTeamsRequest(params);

    onSuccess();
    return response;
  },
);
