import { Exec, PortfolioData, PortfolioRole } from "../members";

export const teamData = {
  execs: [
    {
      name: "Christopher Manouvrier",
      role: "Co-President",
    },
    {
      name: "Beth Crane",
      role: "Co-President",
    },
    {
      name: "Robert Newey",
      role: "Secretary",
    },
    {
      name: "Luke Tsekouras",
      role: "Treasurer",
    },
    {
      name: "William Korteland",
      role: "Arc Delegate",
    },
  ] as Exec[],

  portfolios: [
    {
      name: "Beta",
      description: "",
      members: [
        { name: "Wen Di Lim", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Dev",
      description: "",
      members: [
        { name: "Mathew Moss", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "High School",
      description: "",
      members: [
        { name: "Peter Camilleri", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Samuel Li", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Publicity",
      description: "",
      members: [
        { name: "Caroline Cham", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Social",
      description: "",
      members: [
        { name: "Evelyn Chensen", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Tech",
      description: "",
      members: [
        { name: "Pierre Estephan", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
  ] as PortfolioData[],
};