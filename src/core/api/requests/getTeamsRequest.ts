import { baseRequest } from "../baseRequest";
import { IGetTeamsParams, IGetTeamsResponse } from "../dto/IGetTeams";

export const getTeamsRequest = (params?: IGetTeamsParams) =>
  baseRequest<IGetTeamsParams, IGetTeamsResponse>({
    url: "/api/Team/GetTeams",
    method: "GET",
    params,
  });
