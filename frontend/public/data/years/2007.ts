import { Exec, PortfolioData, PortfolioRole } from "../members";

export const teamData = {
  execs: [
    {
      name: "Stephen Cossell",
      role: "President",
    },
    {
      name: "Chris Macauley",
      role: "Vice President",
    },
    {
      name: "Mitchell Reid",
      role: "Treasurer",
    },
    {
      name: "Alex Kuptsov",
      role: "Secretary",
    },
  ] as Exec[],

  portfolios: [
    {
      name: "Computer Engineering",
      description: "",
      members: [
        { name: "Andrew Bastardo", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Computer Science",
      description: "",
      members: [
        { name: "Glen Trevor Kelley", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "First Year",
      description: "",
      members: [
        { name: "Charissa Upcroft", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "David Claridge", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Publicity",
      description: "",
      members: [
        { name: "Mervin Sayseng", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Social",
      description: "",
      members: [
        { name: "Fionnbharr Davies", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Rupert Shuttleworth", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Software Engineering",
      description: "",
      members: [
        { name: "Andrew John Clayphan", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Technical",
      description: "",
      members: [
        { name: "V. Ramana Kirubagaran (Head)", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Suwandy Tjin", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Yose Widjaja", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
  ] as PortfolioData[],
};