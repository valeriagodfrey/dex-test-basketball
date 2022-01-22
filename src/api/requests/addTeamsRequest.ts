import { baseRequest } from "../baseRequest";
import { IAddTeamsRequest, IAddTeamsResponse } from "../dto/IAddTeams";

export const addTeamsRequest = (params: IAddTeamsRequest) =>
  baseRequest<IAddTeamsRequest, IAddTeamsResponse>({
    url: "/api/Team/Add",
    method: "POST",
    params,
  });
