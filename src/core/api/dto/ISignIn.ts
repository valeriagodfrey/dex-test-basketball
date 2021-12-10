export type ISignInRequest = {
  login: string;
  password: string;
};
export type ISignInResponse = {
  name: string;
  avatarUrl: string;
  token: string;
};
