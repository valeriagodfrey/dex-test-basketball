import { baseRequest } from "../baseRequest";
import { IGetTeamParams, IGetTeamResponse } from "../dto/IGetTeams";

export const getTeamRequest = (params?: IGetTeamParams) =>
  baseRequest<IGetTeamParams, IGetTeamResponse>({
    url: "/api/Team/Get",
    method: "GET",
    params,
  });
