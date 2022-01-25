import { baseRequest } from "../baseRequest";
import { IRegistrationResponse, ISignInRequest, ISignUpRequest } from "../dto/ISignIn";

export const signIn = (params: ISignInRequest) =>
  baseRequest<ISignInRequest, IRegistrationResponse>({
    url: "/api/Auth/SignIn",
    method: "POST",
    params,
    notAuth: true,
  });

export const signUp = (params: ISignUpRequest) =>
  baseRequest<ISignUpRequest, IRegistrationResponse>({
    url: "/api/Auth/SignUp",
    method: "POST",
    params,
    notAuth: true,
  });
