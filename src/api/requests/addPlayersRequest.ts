import { baseRequest } from "../baseRequest";
import { IAddPlayersRequest, IAddPlayersResponse } from "../dto/IAddPlayers";

export const addPlayersRequest = (params: IAddPlayersRequest) =>
  baseRequest<IAddPlayersRequest, IAddPlayersResponse>({
    url: "/api/Player/Add",
    method: "POST",
    params,
  });
