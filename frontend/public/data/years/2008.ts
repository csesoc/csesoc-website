import { Exec, PortfolioData, PortfolioRole } from "../members";

export const teamData = {
  execs: [
    {
      name: "David Claridge",
      role: "President",
    },
    {
      name: "Martin Mao",
      role: "Vice President",
    },
    {
      name: "Rhys Schmidtke",
      role: "Treasurer",
    },
    {
      name: "Elizabeth O'Loughlin",
      role: "Secretary",
    },
    {
      name: "Chaitanya Manapragada",
      role: "Arc Delegate",
    },
  ] as Exec[],

  portfolios: [
    {
      name: "Computer Engineering",
      description: "",
      members: [
        { name: "Christopher Bailey", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Computer Science",
      description: "",
      members: [
        { name: "Matthew Conolly", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "First Year",
      description: "",
      members: [
        { name: "Luke Swithenbank", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Robert Massaioli", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Postgraduate",
      description: "",
      members: [
        { name: "Toby Rahilly", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
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
        { name: "Anna Lyons", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Jayen Ashar", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Stuart Robinson", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Software Engineering",
      description: "",
      members: [
        { name: "Susan Shi", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Technical",
      description: "",
      members: [
        { name: "V. Ramana Kirubagaran (Head)", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Dean Berwick", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Prashant Varanasi", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "The Switch",
      description: "",
      members: [
        { name: "Adam Brimo", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Sam Gentle", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
  ] as PortfolioData[],
};