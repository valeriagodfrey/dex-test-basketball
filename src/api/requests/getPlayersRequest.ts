import { baseRequest } from "../baseRequest";
import { IGetPlayersParams, IGetPlayersResponse } from "../dto/IGetPlayers";

export const getPlayersRequest = (params?: IGetPlayersParams) =>
  baseRequest<IGetPlayersParams, IGetPlayersResponse>({
    url: "/api/Player/GetPlayers",
    method: "GET",
    params,
  });
