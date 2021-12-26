export type IGetPlayersParams = {
  name?: string;
  teamIds?: [number];
  page?: number;
  pageSize?: number;
};
export type IGetPlayersResponse = {
  data: [
    {
      name: string;
      number: 0;
      position: string;
      team: 0;
      birthday: "2021-12-26T02:16:52.490Z";
      height: 0;
      weight: 0;
      avatarUrl: string;
      id: 0;
    },
  ];
  count: 0;
  page: 0;
  size: 0;
};
