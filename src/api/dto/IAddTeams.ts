export type IAddTeamRequest = {
  name: string;
  foundationYear: number;
  division: string;
  conference: string;
  imageUrl: string;
};

export type IAddTeamResponse = {
  name: string;
  foundationYear: number;
  division: string;
  conference: string;
  imageUrl: string;
  id: number;
};
