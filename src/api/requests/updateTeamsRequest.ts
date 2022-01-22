import { baseRequest } from "../baseRequest";
import { IAddTeamsRequest, IAddTeamsResponse } from "../dto/IAddTeams";

export const updateTeamsRequest = (params: IAddTeamsRequest) =>
  baseRequest<IAddTeamsRequest, IAddTeamsResponse>({
    url: "/api/Team/Update",
    method: "PUT",
    params,
  });
