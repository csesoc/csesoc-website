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
      description: "Facilitates industry sponsor relations, as well as creating events focused on interpersonal development and networking.",
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
      description: "Promotes CSESoc on our social media as well as creating supplementary marketing material to engage our audience.",
      members: [
        { name: "Amy Luo", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Taiyue Tan", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Media",
      description: "Focuses on creating content for our CSESoc community and beyond to capture our diverse student voice.",
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
      description: "Organises approachable events targeted towards building an inclusive and welcoming community, to help build long-lasting friendships!",
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
