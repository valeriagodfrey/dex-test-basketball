import { baseRequest } from "../baseRequest";
import { IGetTeamParams, IGetTeamResponse } from "../dto/IGetTeams";

export const deleteTeamRequest = (params: IGetTeamParams) =>
  baseRequest<IGetTeamParams, IGetTeamResponse>({
    url: "/api/Team/Delete",
    method: "DELETE",
    params,
  });
