import { baseRequest } from "../baseRequest";
import { IGetPlayerParams, IGetPlayerResponse } from "../dto/IGetPlayers";

export const getPlayerRequest = (params?: IGetPlayerParams) =>
  baseRequest<IGetPlayerParams, IGetPlayerResponse>({
    url: "/api/Player/Get",
    method: "GET",
    params,
  });
