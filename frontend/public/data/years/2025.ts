import { Exec, PortfolioData, PortfolioRole } from "../members";

export const teamData = {
  execs: [
		{
			name: "Joyce He",
			role: "Co-President",
		},
		{
			name: "Susie Xia",
			role: "Co-President",
		},
		{
			name: "Zitian Qin",
			role: "Secretary",
		},
		{
			name: "Lisa Lin",
			role: "Treasurer",
		},
		{
			name: "Leo Maisnam",
			role: "Arc Delegate",
		},
		{
			name: "Aryan Chauhan",
			role: "Grievance, Equity, Diversity and Inclusion Officer",
		},
		{
			name: "Emma Nguyen",
			role: "Vice President (External)",
		},
		{
			name: "Jordan Djamaan",
			role: "Vice President (Internal)",
		},
		{
			name: "JJ Roberts-White",
			role: "Vice President (Technical)",
		},
  ] as Exec[],

  portfolios: [
		{
			name: "Careers",
			description: "Facilitates industry sponsor relations, as well as creating events focused on interpersonal development and networking.",
			members: [
				{ name: "Nathan Lin", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
				{ name: "Michael Liu", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
				{ name: "Angel Yu", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
			],
		},
		{
			name: "Events",
			description: "Plans a diverse range of large-scale activities while focusing on creating an enjoyable and fun experiences for all participants!",
			members: [
				{ name: "Lee Torr Chin", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
				{ name: "Ethan Gu", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
				{ name: "Kayla Lee", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
			],
		},
		{
			name: "Outreach",
			description: "Creates inclusive and approachable events targeted towards overlooked and underrepresented students.",
			members: [
				{ name: "Qiandai Huang", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
				{ name: "Hayden Ho", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
				{ name: "Liem Phan", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
			],
		},
		{
			name: "Socials",
			description: "Organises approachable events targeted towards building an inclusive and welcoming community, to help build long-lasting friendships!",
			members: [
				{ name: "Patrick Sun", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
				{ name: "Makeen Alaeddin", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
				{ name: "April Choi", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
			],
		},
		{
			name: "Creative",
			description: "Lays the groundwork for CSESoc's aesthetic branding, providing an outlet for creative expression.",
			members: [
				{ name: "Jasmine Chiu", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
				{ name: "Louis Policarpio", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
				{ name: "Ralph Capricho", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
			],
		},
		{
			name: "HR",
			description: "Fosters the internal culture of the internal/external team - bringing people together, encouraging a supportive environment and most of all - memories.",
			members: [
				{ name: "Darien Trinh", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
				{ name: "Isabella Tan", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
				{ name: "Jenny Tran", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
			],
		},
		{
			name: "Marketing",
			description: "Promotes CSESoc on our social media as well as creating supplementary marketing material to engage our audience.",
			members: [
				{ name: "Sienna Gunawan", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
				{ name: "Vedant Vaghela", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
				{ name: "Joanna Wong", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
			],
		},
		{
			name: "Media",
			description: "Focuses on creating content for our CSESoc community and beyond to capture our diverse student voice.",
			members: [
				{ name: "Hae Kim", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
				{ name: "Bella Li", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
				{ name: "Christine Park", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
			],
		},
		{
			name: "Competitions",
			description: "Organises a variety of contests to empower students beyond coursework and allow them meet others.",
			members: [
				{ name: "Luke Zeng", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
				{ name: "Xuanyu Liu", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
				{ name: "Valerie Chan", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
			],
		},
		{
			name: "Education",
			description: "Teaches interesting technical skills to the community, whether that's through workshops, articles, or programs.",
			members: [
				{ name: "Eric Xu", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
				{ name: "Erica Lin", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
				{ name: "Andrew Zhang", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
			],
		},
		{
			name: "IT",
			description: "Oversees the development of the CSESoc's internal projects and plays an active role in the technical aspects of our society.",
			members: [
				{ name: "Dylan Zhang", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
				{ name: "Justine Kim", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
			],
		},
		{
			name: "Digital",
			description: "Expands CSESoc's vibrant community into the virtual world, running online events and managing our online spaces to make sure everyone feels welcomed in our community.",
			members: [
				{ name: "Wendy Wang", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
				{ name: "Aaron Tian", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
			],
		},
		{
			name: "Platforms",
			description: "Maintains the infrastructure underlying the CSESoc IT Portfolio Projects.",
			members: [
				{ name: "Dominic Cheung", role: PortfolioRole.DIRECTOR, imageUrl: "/images/members/blank-pfp.png" },
			]
		}
  ] as PortfolioData[],
};
