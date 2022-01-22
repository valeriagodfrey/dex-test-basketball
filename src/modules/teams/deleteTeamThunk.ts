import { createAsyncThunk } from "@reduxjs/toolkit";

import { IGetTeamParams } from "../../api/dto/IGetTeams";
import { deleteTeamRequest } from "../../api/requests/deleteTeamRequest";

export const deleteTeam = createAsyncThunk(
  "deleteTeam",
  async ({ params, onSuccess }: { params: IGetTeamParams; onSuccess: () => void }) => {
    const response = await deleteTeamRequest(params);

    onSuccess();
    return response;
  },
);
