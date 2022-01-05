export type IAddTeamsRequest = {
  name: string;
  foundationYear: number;
  division: string;
  conference: string;
  imageUrl: string;
};

export type IAddTeamsResponse = {
  name: string;
  foundationYear: number;
  division: string;
  conference: string;
  imageUrl: string;
  id: number;
};
