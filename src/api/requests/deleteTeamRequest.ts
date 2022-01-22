import { stringifyUrl } from "query-string";

import { baseRequest } from "../baseRequest";
import { IGetTeamParams, IGetTeamResponse } from "../dto/IGetTeams";

export const deleteTeamRequest = (params: IGetTeamParams) =>
  baseRequest<IGetTeamParams, IGetTeamResponse>({
    url: stringifyUrl({ url: "/api/Team/Delete", query: params }),
    method: "DELETE",
    params,
  });
