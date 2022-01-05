export type IGetTeamsParams = {
  name?: string;
  page?: number;
  pageSize?: number;
};
export type IGetTeamsResponse = {
  data: [
    {
      name: string;
      foundationYear: 0;
      division: string;
      conference: string;
      imageUrl: string;
      id: number;
    },
  ];
  count: 0;
  page: 0;
  size: 0;
};
export type IGetTeamParams = {
  id: number | undefined;
};
export type IGetTeamResponse = {
  name: string;
  foundationYear: 0;
  division: string;
  conference: string;
  imageUrl: string;
  id: number;
};
