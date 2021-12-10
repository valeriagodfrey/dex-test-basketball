import { baseRequest } from "../baseRequest";
import { ISignUpRequest, ISignUpResponse } from "../dto/ISignUp";

export const signUp = (params: ISignUpRequest) =>
  baseRequest<ISignUpRequest, ISignUpResponse>({
    url: "/api/Auth/SignUp",
    method: "POST",
    params,
    notAuth: true,
  });
