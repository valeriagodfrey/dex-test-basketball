import { baseRequest } from "../baseRequest";
import { ISignInRequest, ISignInResponse } from "../dto/ISignIn";

export const signIn = (params: ISignInRequest) =>
  baseRequest<ISignInRequest, ISignInResponse>({
    url: "/api/Auth/SignIn",
    method: "POST",
    params,
    notAuth: true,
  });
