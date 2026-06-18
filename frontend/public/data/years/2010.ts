import { Exec, PortfolioData, PortfolioRole } from "../members";

export const teamData = {
  execs: [
    {
      name: "Samantha Ho",
      role: "Co-President",
    },
    {
      name: "Jayen Ashar",
      role: "Co-President",
    },
    {
      name: "Prashant Varanasi",
      role: "Co-President",
    },
    {
      name: "Justin Wong",
      role: "Arc Delegate",
    },
    {
      name: "Belinda Teh",
      role: "Secretary",
    },
    {
      name: "Simonne Mautner",
      role: "Treasurer",
    },
  ] as Exec[],

  portfolios: [
    {
      name: "Beta",
      description: "",
      members: [
        { name: "Charles Ma", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Publicity",
      description: "",
      members: [
        { name: "Aditya Keswani", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Social",
      description: "",
      members: [
        { name: "Natalie Wong", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Sysadmin",
      description: "",
      members: [
        { name: "Robert Massaioli", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Tech",
      description: "",
      members: [
        { name: "Carl Chatfield", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Maxwell Swadling", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Yongki Yusmanthia", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
  ] as PortfolioData[],
};