import { baseRequest } from "../baseRequest";
import { IRegistrationResponse, ISignInRequest } from "../dto/ISignIn";

export const signIn = (params: ISignInRequest) =>
  baseRequest<ISignInRequest, IRegistrationResponse>({
    url: "/api/Auth/SignIn",
    method: "POST",
    params,
    headers: { "Content-Type": "application/json" },
    notAuth: true,
  });
