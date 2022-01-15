export type IGetTeamsParams = {
  name?: string;
  page?: number;
  pageSize?: number;
};
export type ITeam = {
  name: string;
  foundationYear: number;
  division: string;
  conference: string;
  imageUrl: string;
  id: number;
};
export type IGetTeamsResponse = {
  data: ITeam[];
  count: number;
  page: number;
  size: number;
};
export type IGetTeamParams = {
  id: number;
};
export type IGetTeamResponse = {
  name: string;
  foundationYear: number;
  division: string;
  conference: string;
  imageUrl: string;
  id: number;
};
