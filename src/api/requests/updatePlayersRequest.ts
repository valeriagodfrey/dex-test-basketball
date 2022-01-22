import { baseRequest } from "../baseRequest";
import { IAddPlayersRequest, IAddPlayersResponse } from "../dto/IAddPlayers";

export const updatePlayersRequest = (params: IAddPlayersRequest) =>
  baseRequest<IAddPlayersRequest, IAddPlayersResponse>({
    url: "/api/Player/Update",
    method: "PUT",
    params,
  });
