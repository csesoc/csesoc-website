import { Exec, PortfolioData, PortfolioRole } from "../members";

export const teamData = {
  execs: [
    {
      name: "Vincent Wong",
      role: "Co-President",
    },
    {
      name: "Pierre Estephan",
      role: "Co-President",
    },
    {
      name: "Caroline Cham",
      role: "Secretary",
    },
    {
      name: "Matthew Moss",
      role: "Treasurer",
    },
    {
      name: "Lavender Chan",
      role: "Arc Delegate",
    },
  ] as Exec[],

  portfolios: [
    {
      name: "Beta",
      description: "",
      members: [
        { name: "Angelo Tamayo", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Dev",
      description: "",
      members: [
        { name: "John Wiseheart", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Vincent Tran", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "High School",
      description: "",
      members: [
        { name: "Mrinal Chakravarthy", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Vanessa Ung", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Publicity",
      description: "",
      members: [
        { name: "Davina Adisusila", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Social",
      description: "",
      members: [
        { name: "Lucas Pickup", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Oliver Tan", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Tech",
      description: "",
      members: [
        { name: "Karl Krauth", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
  ] as PortfolioData[],
};