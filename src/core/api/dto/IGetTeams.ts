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
      id: 0;
    },
  ];
  count: 0;
  page: 0;
  size: 0;
};
