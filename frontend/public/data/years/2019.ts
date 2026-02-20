import { Exec, PortfolioData, PortfolioRole } from "../members";

export const teamData = {
  execs: [
    {
      name: "Alli Murray",
      role: "Co-President",
    },
    {
      name: "Siddhant Virmani",
      role: "Co-President",
    },
    {
      name: "Celine Tye",
      role: "Secretary",
    },
    {
      name: "Gary Bai",
      role: "Treasurer",
    },
    {
      name: "Peter Nguyen",
      role: "Arc Delegate",
    },
  ] as Exec[],

  portfolios: [
    {
      name: "Careers",
      description: "",
      members: [
        { name: "Sam Push", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Sophia Lin", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "CompClub",
      description: "",
      members: [
        { name: "Jeremy Chiu", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Teresa Feng", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Marketing",
      description: "",
      members: [
        { name: "Amy Luo", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Taiyue Tan", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Media",
      description: "",
      members: [
        { name: "Adrian Martinez", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Mehri Amin", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
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
      name: "Social Events",
      description: "",
      members: [
        { name: "Selina Chua", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Nathan Ellis", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Software Projects",
      description: "",
      members: [
        { name: "Shane Kadish", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Tom Kunc", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Student Network",
      description: "",
      members: [
        { name: "Tammy Zhong", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Workshops & Academics",
      description: "",
      members: [
        { name: "Oliver Dolk", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
  ] as PortfolioData[],
};
