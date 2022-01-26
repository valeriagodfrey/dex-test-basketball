import { stringifyUrl } from "query-string";

import { baseRequest } from "../baseRequest";
import { IAddTeamRequest, IAddTeamResponse } from "../dto/IAddTeams";
import {
  IGetTeamParams,
  IGetTeamResponse,
  IGetTeamsParams,
  IGetTeamsResponse,
} from "../dto/IGetTeams";

export const addTeamRequest = (params: IAddTeamRequest) =>
  baseRequest<IAddTeamRequest, IAddTeamResponse>({
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

export const updateTeamRequest = (params: IAddTeamRequest) =>
  baseRequest<IAddTeamRequest, IAddTeamResponse>({
    url: "/api/Team/Update",
    method: "PUT",
    params,
  });
