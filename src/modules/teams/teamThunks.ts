import { createAsyncThunk } from "@reduxjs/toolkit";

import { IAddTeamRequest } from "../../api/dto/IAddTeams";
import { IGetTeamParams } from "../../api/dto/IGetTeams";
import {
  addTeamRequest,
  deleteTeamRequest,
  getTeamRequest,
  updateTeamRequest,
} from "../../api/requests/teamsRequests";

export const addTeam = createAsyncThunk(
  "addTeam",
  async ({ params, onSuccess }: { params: IAddTeamRequest; onSuccess: () => void }) => {
    const response = await addTeamRequest(params);

    onSuccess();
    return response;
  },
);

export const deleteTeam = createAsyncThunk(
  "deleteTeam",
  async ({ params, onSuccess }: { params: IGetTeamParams; onSuccess: () => void }) => {
    const response = await deleteTeamRequest(params);

    onSuccess();
    return response;
  },
);

export const getTeam = createAsyncThunk("getTeam", async (params?: IGetTeamParams) => {
  const response = await getTeamRequest(params);
  return response;
});

export const updateTeam = createAsyncThunk(
  "updateTeam",
  async ({ params, onSuccess }: { params: IAddTeamRequest; onSuccess: () => void }) => {
    const response = await updateTeamRequest(params);

    onSuccess();
    return response;
  },
);
