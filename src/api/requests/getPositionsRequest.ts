import { baseRequest } from "../baseRequest";
import { IGetPositionsResponse } from "../dto/IGetPositions";

export const getPositionsRequest = () =>
  baseRequest<Record<string, never>, IGetPositionsResponse>({
    url: "/api/Player/GetPositions",
    method: "GET",
  });
