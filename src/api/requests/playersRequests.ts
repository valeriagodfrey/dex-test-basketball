import { stringifyUrl } from "query-string";

import { baseRequest } from "../baseRequest";
import { IAddPlayerRequest, IAddPlayerResponse } from "../dto/IAddPlayers";
import {
  IGetPlayerParams,
  IGetPlayerResponse,
  IGetPlayersParams,
  IGetPlayersResponse,
} from "../dto/IGetPlayers";
import { IGetPositionsResponse } from "../dto/IGetPositions";

export const addPlayerRequest = (params: IAddPlayerRequest) =>
  baseRequest<IAddPlayerRequest, IAddPlayerResponse>({
    url: "/api/Player/Add",
    method: "POST",
    params,
  });

export const deletePlayerRequest = (params: IGetPlayerParams) =>
  baseRequest<IGetPlayerParams, IGetPlayerResponse>({
    url: stringifyUrl({ url: "/api/Player/Delete", query: params }),
    method: "DELETE",
    params,
  });

export const getPlayerRequest = (params?: IGetPlayerParams) =>
  baseRequest<IGetPlayerParams, IGetPlayerResponse>({
    url: "/api/Player/Get",
    method: "GET",
    params,
  });

export const getPlayersRequest = (params?: IGetPlayersParams) =>
  baseRequest<IGetPlayersParams, IGetPlayersResponse>({
    url: "/api/Player/GetPlayers",
    method: "GET",
    params,
  });

export const getPositionsRequest = () =>
  baseRequest<Record<string, never>, IGetPositionsResponse>({
    url: "/api/Player/GetPositions",
    method: "GET",
  });

export const updatePlayersRequest = (params: IAddPlayerRequest) =>
  baseRequest<IAddPlayerRequest, IAddPlayerResponse>({
    url: "/api/Player/Update",
    method: "PUT",
    params,
  });
