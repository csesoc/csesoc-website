import { Exec, PortfolioData, PortfolioRole } from "../members";

export const teamData = {
  execs: [
    {
      name: "Nicola Gibson",
      role: "Co-President",
    },
    {
      name: "Adam Tizzone",
      role: "Co-President",
    },
    {
      name: "Martin Le",
      role: "Secretary",
    },
    {
      name: "Jesse Zhang",
      role: "Treasurer",
    },
    {
      name: "Weilon Ying",
      role: "Arc Delegate",
    },
  ] as Exec[],

  portfolios: [
    {
      name: "Beta",
      description: "",
      members: [
        { name: "Melissa Zhang", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "CompClub",
      description: "",
      members: [
        { name: "Angelo Yan", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Nethan Tran", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Dev",
      description: "",
      members: [
        { name: "Daniel Cameron", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "DevSpace",
      description: "",
      members: [
        { name: "Inura De Zoysa", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Publicity",
      description: "",
      members: [
        { name: "Vivian Dang", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Social",
      description: "",
      members: [
        { name: "Andrew Vo", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Ofir Zeevi", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Student Network",
      description: "",
      members: [
        { name: "David Sison", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Talks",
      description: "",
      members: [
        { name: "Raiyan Zubair", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Workshops",
      description: "",
      members: [
        { name: "Mitch Ball", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
  ] as PortfolioData[],
};