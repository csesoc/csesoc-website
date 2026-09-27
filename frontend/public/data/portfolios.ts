export type PortfolioData = {
  name: string,
  description: string,
  members: PortfolioMember[],
};

export type PortfolioMember = {
  name: string,
  role: PortfolioRole,
  imageUrl: string;
}

export enum PortfolioRole {
  DIRECTOR = "Director",
  SUBCOM = "Subcommittee",
}

export const PORTFOLIOS: PortfolioData[] = [
  {
    name: "Careers",
    description: "Facilitates industry sponsor relations, as well as creating events focused on interpersonal development and networking.",
    members: [
      { name: "Joseph Nguyen", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      { name: "Angelina He", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      { name: "Justin Yang", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
    ],
  },
  {
    name: "Events",
    description: "Plans a diverse range of large-scale activities while focusing on creating an enjoyable and fun experiences for all participants!",
    members: [
      { name: "Rowena Wang", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      { name: "Antonio Jimenez", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      { name: "Danielle Weng", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
    ],
  },
  {
    name: "Outreach",
    description: "Creates inclusive and approachable events targeted towards overlooked and underrepresented students.",
    members: [
      { name: "Richard Zhang", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      { name: "Aria Zhange", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      { name: "Romeo Abra", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
    ],
  },
  {
    name: "Socials",
    description: "Organises approachable events targeted towards building an inclusive and welcoming community, to help build long-lasting friendships!",
    members: [
      { name: "Jennifer Su", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      { name: "Ryne Echaluse", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      { name: "Sophia Chu", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
    ],
  },
  {
    name: "Creative",
    description: "Lays the groundwork for CSESoc's aesthetic branding, providing an outlet for creative expression.",
    members: [
      { name: "Ashley Lin", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      { name: "Lauren Shin", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      { name: "Eric Li", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
    ],
  },
  {
    name: "HR",
    description: "Fosters the internal culture of the internal/external team - bringing people together, encouraging a supportive environment and most of all - memories.",
    members: [
      { name: "Tori Huang", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      { name: "Chris Szeto", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      { name: "Emma Bu", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
    ],
  },
  {
    name: "Marketing",
    description: "Promotes CSESoc on our social media as well as creating supplementary marketing material to engage our audience.",
    members: [
      { name: "Yiteng Li", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      { name: "Lana Ong", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      { name: "Jayden Ho", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
    ],
  },
  {
    name: "Media",
    description: "Focuses on creating content for our CSESoc community and beyond to capture our diverse student voice.",
    members: [
      { name: "Summer Manning-Lees", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      { name: "Kelly Tran", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      { name: "Christian Selvaratnam", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
    ],
  },
  {
    name: "Competitions",
    description: "Organises a variety of contests to empower students beyond coursework and allow them meet others.",
    members: [
      { name: "Jason Luo-Xia", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      { name: "Kendra Dang", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      { name: "Jessica Gao", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
    ],
  },
  {
    name: "Education",
    description: "Teaches interesting technical skills to the community, whether that's through workshops, articles, or programs.",
    members: [
      { name: "Sophia Pek", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      { name: "Abtin Moghadam", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      { name: "Lucas Li", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
    ],
  },
  {
    name: "IT",
    description: "Oversees the development of the CSESoc's internal projects and plays an active role in the technical aspects of our society.",
    members: [
      { name: "Tinlone Cheng", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      { name: "Dorothy Koo", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      { name: "Louis Lim", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },

    ],
  },
  {
    name: "Digital",
    description: "Expands CSESoc's vibrant community into the virtual world, running online events and managing our online spaces to make sure everyone feels welcomed in our community.",
    members: [
      { name: "Ziqi Chen", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      { name: "Timothy Lai", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      { name: "Mimi Vu", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
    ],
  },
  {
    name: "Platforms",
    description: "Maintains the infrastructure underlying the CSESoc IT Portfolio Projects.",
    members: [
      { name: "Andrew Zhang", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
      { name: "Dylan Zhang", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
    ]
  }
];
