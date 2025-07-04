import { Exec, PortfolioData, PortfolioRole } from "../members";

export const teamData = {
  execs: [
    {
      name: "Ofir Zeevi",
      role: "Co-President",
    },
    {
      name: "Andrew Vo",
      role: "Co-President",
    },
    {
      name: "Andrew Kaploun",
      role: "Secretary",
    },
    {
      name: "Martin Minh Le",
      role: "Treasurer",
    },
    {
      name: "Raiyan Zubair",
      role: "Arc Delegate",
    },
  ] as Exec[],

  portfolios: [
    {
      name: "CompClub",
      description: "",
      members: [
        { name: "Peter Arnott", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Lillian Guo", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Marketing",
      description: "",
      members: [
        { name: "Celine Tye", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Sheng An Zhang", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Professional Development & Networking",
      description: "",
      members: [
        { name: "Apurva Shukla", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Publications",
      description: "",
      members: [
        { name: "Siddhant Virmani", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Sponsored Events",
      description: "",
      members: [
        { name: "Gary Bai", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Conway Ying", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Social Events",
      description: "",
      members: [
        { name: "Mark Sonnenschein", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Sampath Somanchi", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Software Projects",
      description: "",
      members: [
        { name: "Amri Chamela", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Student Network",
      description: "",
      members: [
        { name: "Alli Murray", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Workshops & Academics",
      description: "",
      members: [
        { name: "Nicholas Malecki", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
  ] as PortfolioData[],
};
