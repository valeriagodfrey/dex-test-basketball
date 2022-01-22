import { createAsyncThunk } from "@reduxjs/toolkit";

import { ISignInRequest, ISignUpRequest } from "../../api/dto/ISignIn";
import { signIn } from "../../api/requests/signIn";
import { signUp } from "../../api/requests/signUp";

export const fetchRegistration = createAsyncThunk(
  "registration",
  async (params: ISignUpRequest) => {
    const response = await signUp(params);
    localStorage.setItem("token", response.token);
    window.dispatchEvent(new Event("storage"));
    return response;
  },
);

export const fetchAuthorization = createAsyncThunk(
  "authorization",
  async (params: ISignInRequest) => {
    const response = await signIn(params);
    localStorage.setItem("token", response.token);
    window.dispatchEvent(new Event("storage"));
    return response;
  },
);
