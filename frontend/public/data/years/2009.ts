import { Exec, PortfolioData, PortfolioRole } from "../members";

export const teamData = {
  execs: [
    {
      name: "Luke Swithenbank",
      role: "Co-President",
    },
    {
      name: "Cassandra Hill",
      role: "Co-President",
    },
    {
      name: "David Claridge",
      role: "Arc Delegate",
    },
    {
      name: "Emily Siow",
      role: "Secretary",
    },
    {
      name: "Simonne Mautner",
      role: "Treasurer",
    },
  ] as Exec[],

  portfolios: [
    {
      name: "Publicity",
      description: "",
      members: [
        { name: "Phys Schmidtke", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Social",
      description: "",
      members: [
        { name: "Ben Lambert-Smith", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Sysadmin",
      description: "",
      members: [
        { name: "Prashant Varanasi", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Tech",
      description: "",
      members: [
        { name: "Jayen Ashar", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "The Switch",
      description: "",
      members: [
        { name: "Jeremy Apthorp", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Web",
      description: "",
      members: [
        { name: "Stephen Cossell", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
  ] as PortfolioData[],
};