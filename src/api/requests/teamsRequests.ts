import { stringifyUrl } from "query-string";

import { baseRequest } from "../baseRequest";
import { IAddTeamsRequest, IAddTeamsResponse } from "../dto/IAddTeams";
import {
  IGetTeamParams,
  IGetTeamResponse,
  IGetTeamsParams,
  IGetTeamsResponse,
} from "../dto/IGetTeams";

export const addTeamsRequest = (params: IAddTeamsRequest) =>
  baseRequest<IAddTeamsRequest, IAddTeamsResponse>({
    url: "/api/Team/Add",
    method: "POST",
    params,
  });

export const deleteTeamRequest = (params: IGetTeamParams) =>
  baseRequest<IGetTeamParams, IGetTeamResponse>({
    url: stringifyUrl({ url: "/api/Team/Delete", query: params }),
    method: "DELETE",
    params,
  });

export const getTeamRequest = (params?: IGetTeamParams) =>
  baseRequest<IGetTeamParams, IGetTeamResponse>({
    url: "/api/Team/Get",
    method: "GET",
    params,
  });

export const getTeamsRequest = (params?: IGetTeamsParams) =>
  baseRequest<IGetTeamsParams, IGetTeamsResponse>({
    url: "/api/Team/GetTeams",
    method: "GET",
    params,
  });

export const updateTeamsRequest = (params: IAddTeamsRequest) =>
  baseRequest<IAddTeamsRequest, IAddTeamsResponse>({
    url: "/api/Team/Update",
    method: "PUT",
    params,
  });
