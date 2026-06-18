import { Exec, PortfolioData, PortfolioRole } from "../members";

export const teamData = {
  execs: [
    {
      name: "Shane Kadish",
      role: "Co-President",
    },
    {
      name: "Tammy Zhong",
      role: "Co-President",
    },
    {
      name: "Sam Push",
      role: "Secretary",
    },
    {
      name: "Teresa Feng",
      role: "Treasurer",
    },
    {
      name: "Jeremy Chiu",
      role: "Arc Delegate",
    },
    {
      name: "Tom Kunc",
      role: "Grievance Officer",
    },
  ] as Exec[],

  portfolios: [
    {
      name: "Careers",
      description: "",
      members: [
        { name: "Evangeline Endacott", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Low Khye Ean", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Nicholas Duller", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Yan Zhai", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "CompClub",
      description: "",
      members: [
        { name: "Livia Wijayanti", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Timothy Ryan", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Creative",
      description: "",
      members: [
        { name: "Elizabeth Zhong", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Jia Min Guo", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Marketing",
      description: "",
      members: [
        { name: "Isaac Pamu Joshi", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Jessica Feng", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Media",
      description: "",
      members: [
        { name: "Aditi Chandra", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Clarence Shijun Feng", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Socials",
      description: "",
      members: [
        { name: "Frances Lee", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Van-Roy Trinh", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Software Projects",
      description: "",
      members: [
        { name: "Gordon Zhong", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Leesa Kristina Dang", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Student Network",
      description: "",
      members: [
        { name: "Sachin Krishnamoorthy", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Shrey Somaiya", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Workshops",
      description: "",
      members: [
        { name: "Michael Gribben", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
  ] as PortfolioData[],
};
