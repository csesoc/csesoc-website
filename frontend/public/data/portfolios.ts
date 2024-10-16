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
            {
                name: "Eric Kang",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "Jasmine Xian",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "Max Lee",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
        ],
    },
    {
        name: "Competitions",
        description: "Organises a variety of contests to empower students beyond coursework and allow them meet others.",
        members: [
            {
                name: "Aliff Azlan",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "Haibing Wang",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "Diego Untalan",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
        ],
    },
    {
        name: "Creative",
        description: "Lays the groundwork for CSESoc's aesthetic branding, providing an outlet for creative expression.",
        members: [
            {
                name: "Anna Wang",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "Jordan Djamaan",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "Shabinda Sarkaria",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
        ],
    },
    {
        name: "Education",
        description: "Teaches interesting technical skills to the community, whether that's through workshops, articles or programs.",
        members: [
            {
                name: "Alina Jin",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "JJ Roberts-White",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "Liam Smith",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
        ],
    },
    {
        name: "Events",
        description: "Plan a diverse range of large-scale activities while focusing on creating an enjoyable and fun experiences for all participants!",
        members: [
            {
                name: "Emma Nguyen",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "Jalaj Jain",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "Jenny Lee",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
        ],
    },
    {
        name: "HR",
        description: "Fosters the internal culture of the internal/external team - bringing people together, encouraging a supportive environment and most of all - memories.",
        members: [
            {
                name: "Aryan Chauhan",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "Edwin Tang",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "Jasmine Guan",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
        ],
    },
    {
        name: "IT",
        description: "Oversees the development of the CSESoc's internal projects and infrastructure. Plays an active role in the technical aspects of our society.",
        members: [
            {
                name: "Derek Xu",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "Dominic Cheung",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "Chris Yoo",
                role: PortfolioRole.SUBCOM,
                imageUrl: "/images/members/2024/chris-yoo.png",
            },
            {
                name: "John Doe",
                role: PortfolioRole.SUBCOM,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "John Doe",
                role: PortfolioRole.SUBCOM,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "John Doe",
                role: PortfolioRole.SUBCOM,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "John Doe",
                role: PortfolioRole.SUBCOM,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "John Doe",
                role: PortfolioRole.SUBCOM,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "John Doe",
                role: PortfolioRole.SUBCOM,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "John Doe",
                role: PortfolioRole.SUBCOM,
                imageUrl: "/images/members/blank-pfp.png",
            },
        ],
    },
    {
        name: "Marketing",
        description: "Promotes CSESoc on our social media as well as create supplementary marketing material to engage our audience.",
        members: [
            {
                name: "Aaron Lee",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "Lisa Lin",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "Zitian Qin",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
        ],
    },
    {
        name: "Media",
        description: "Focuses on creating content for our CSESoc community and beyond to capture our diverse student voice.",
        members: [
            {
                name: "Dylan Hu",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "Gloria Xi",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "Leo Ng Maisnam",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
        ],
    },
    {
        name: "Online",
        description: "Expands CSESoc's vibrant community into the virtual world. Includes running events online and managing our online spaces to make sure everyone feels welcomed in our community.",
        members: [
            {
                name: "Amy Tian",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "Brandon Tan",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
        ],
    },
    {
        name: "Outreach",
        description: "Creates inclusive and approachable events targeted towards overlooked and underrepresented students.",
        members: [
            {
                name: "Joyce He",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "Sapphire Wildie",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
        ],
    },
    {
        name: "Socials",
        description: "Organises approachable events targeted towards building an inclusive and welcoming community, to help build long-lasting friendships!",
        members: [
            {
                name: "Davis Lim",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "Jennifer Yu",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
            {
                name: "Susie Xia",
                role: PortfolioRole.DIRECTOR,
                imageUrl: "/images/members/blank-pfp.png",
            },
        ],
    },
];