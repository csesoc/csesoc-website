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
      description: "Facilitates industry sponsor relations, as well as creating events focused on interpersonal development and networking.",
      members: [
        { name: "Evangeline Endacott", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Low Khye Ean", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Nicholas Duller", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
                { name: "Yan Zhai", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "CompClub",
      description: "need to add a description",
      members: [
        { name: "Livia Wijayanti", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Timothy Ryan", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Creative",
      description: "Lays the groundwork for CSESoc's aesthetic branding, providing an outlet for creative expression.",
      members: [
        { name: "Elizabeth Zhong", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Jia Min Guo", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Marketing",
      description: "Promotes CSESoc on our social media as well as creating supplementary marketing material to engage our audience.",
      members: [
        { name: "Isaac Pamu Joshi", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Jessica Feng", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Media",
      description: "Focuses on creating content for our CSESoc community and beyond to capture our diverse student voice.",
      members: [
        { name: "Aditi Chandra", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Clarence Shijun Feng", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Socials",
      description: "Organises approachable events targeted towards building an inclusive and welcoming community, to help build long-lasting friendships!",
      members: [
        { name: "Frances Lee", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Van-Roy Trinh", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Software Projects",
      description: "add a description",
      members: [
        { name: "Gordon Zhong", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Leesa Kristina Dang", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Student Network",
      description: "hello",
      members: [
        { name: "Sachin Krishnamoorthy", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
        { name: "Shrey Somaiya", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
    {
      name: "Workshops",
      description: "hello",
      members: [
        { name: "Michael Gribben", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      ],
    },
  ] as PortfolioData[],
};
