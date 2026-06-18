import { Exec, PortfolioData, PortfolioRole } from "../members";

export const teamData = {
  execs: [
    {
      name: "Aditya Keswani",
      role: "Co-President",
    },
    {
      name: "Peter Milston",
      role: "Co-President",
    },
    {
      name: "Dan Padilha",
      role: "Arc Delegate",
    },
    {
      name: "Natalie Wong",
      role: "Secretary",
    },
    {
      name: "Youssef Hunter",
      role: "Treasurer",
    },
  ] as Exec[],

  portfolios: [
    {
      name: "Beta",
      description: "",
      members: [
        { name: "Timothy Wiley", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Social",
      description: "",
      members: [
        { name: "Sam Li", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Sysadmin",
      description: "",
      members: [
        { name: "Maxwell Swadling", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Tech",
      description: "",
      members: [
        { name: "Ritwik Roy", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
  ] as PortfolioData[],
};