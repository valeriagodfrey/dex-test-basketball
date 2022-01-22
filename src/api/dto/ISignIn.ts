export type ISignInRequest = {
  login: string;
  password: string;
};

export type ISignUpRequest = {
  userName: string;
  login: string;
  password: string;
};

export type IRegistrationResponse = {
  name: string;
  avatarUrl: string;
  token: string;
};
