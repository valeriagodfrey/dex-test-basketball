export type IGetPlayersParams = {
  name?: string;
  teamIds?: [number];
  page?: number;
  pageSize?: number;
};

export type IPlayer = {
  name: string;
  number: number;
  position: string;
  team: number;
  birthday: string;
  height: number;
  weight: number;
  avatarUrl: string;
  id: number;
};

export type IGetPlayersResponse = {
  data: IPlayer[];
  count: number;
  page: number;
  size: number;
};
