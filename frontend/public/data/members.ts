export type Exec = {
  name: string,
  role: string,
};

export type PortfolioData = {
  name: string,
  description: string,
  members: PortfolioMember[],
};
  
export type PortfolioMember = {
  name: string,
  role: PortfolioRole,
  imageUrl: string;
}
  
export enum PortfolioRole {
  DIRECTOR = "Director",
  SUBCOM = "Subcommittee",
  HEAD = "Head Director"
}
