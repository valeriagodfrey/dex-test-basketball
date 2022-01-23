import { baseRequest } from "../baseRequest";
import { IRegistrationResponse, ISignUpRequest } from "../dto/ISignIn";

export const signUp = (params: ISignUpRequest) =>
  baseRequest<ISignUpRequest, IRegistrationResponse>({
    url: "/api/Auth/SignUp",
    method: "POST",
    params,
    notAuth: true,
  });