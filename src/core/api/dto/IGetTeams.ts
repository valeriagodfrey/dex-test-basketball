export type IGetTeamsParams = {
  name?: string;
  page?: number;
  pageSize?: number;
};
export type IGetTeamsResponse = {
  data: [
    {
      name: string;
      foundationYear: number;
      division: string;
      conference: string;
      imageUrl: string;
      id: number;
    },
  ];
  count: number;
  page: number;
  size: number;
};
export type IGetTeamParams = {
  id: number | undefined;
};
export type IGetTeamResponse = {
  name: string;
  foundationYear: number;
  division: string;
  conference: string;
  imageUrl: string;
  id: number;
};
