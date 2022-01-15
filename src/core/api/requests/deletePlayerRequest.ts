import { stringifyUrl } from "query-string";

import { baseRequest } from "../baseRequest";
import { IGetPlayerParams, IGetPlayerResponse } from "../dto/IGetPlayers";

export const deletePlayerRequest = (params: IGetPlayerParams) =>
  baseRequest<IGetPlayerParams, IGetPlayerResponse>({
    url: stringifyUrl({ url: "/api/Player/Delete", query: params }),
    method: "DELETE",
    params,
  });
