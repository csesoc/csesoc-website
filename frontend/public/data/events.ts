export type eventInfo = {
  title: string;
  startTime: string;
  endTime: string;
  location: string;
  // description: string;
  image: string;
  link: string;
};

export const events: eventInfo[] = [
  {
    title: "Startup Spotlight Barbeque",
    startTime: "Wednesday, 11 June 2025 12:00:00",
    endTime: "Wednesday, 11 June 2025 14:00:00",
    location: "John Lions Garden",
    image: "/images/events/startup_spotlight_bbq.jpg",
    link: "https://www.facebook.com/events/1018289650496840"
  },
  {
    title: "Mister Maker's Magic Table",
    startTime: "Wednesday, 18 June 2025 13:00:00",
    endTime: "Wednesday, 18 June 2025 15:00:00",
    location: "UNSW Quad",
    image: "/images/events/mister_makers_magic_table.jpg",
    link: "https://www.facebook.com/events/1224929275882537"
  },
  {
    title: "Industry Mentoring Program Launch",
    startTime: "Wednesday, 18 June 2025 18:00:00",
    endTime: "Wednesday, 18 June 2025 20:00:00",
    location: "Rex Vowels Theatre",
    image: "/images/events/industry_mentoring_program.jpg",
    link: "https://www.facebook.com/events/1776932683235783"
  },
  {
    title: "Rookie Code Rumble",
    startTime: "Friday, 30 May 2025 18:00:00",
    endTime: "Friday, 6 June 2025 23:59:59",
    location: "Online (kick-off location TBD)",
    image: "/images/events/rookie_code_rumble.jpg",
    link: "https://www.facebook.com/events/1062484559164505"
  }
];

export const previousEvents: eventInfo[] = [
  {
    title: "Brawl Stars Tournament",
    startTime: "Thursday, 29 May 2025 20:00:00",
    endTime: "Thursday, 29 May 2025 22:30:00",
    location: "Online via Discord",
    image: "/images/events/brawl_stars.jpg",
    link: "https://www.facebook.com/events/1251081513377441"
  },
  {
    title: "Flower Exchange",
    startTime: "Wednesday, 23 Apr 2025 13:00:00",
    endTime: "Wednesday, 23 Apr 2025 15:00:00",
    location: "The Quad, UNSW",
    image: "/images/events/flower_exchange.jpg",
    link: "https://www.facebook.com/events/623535984011063"
  },
  {
    title: "All the Stars Pubcrawl",
    startTime: "Friday, 28 Mar 2025 19:00:00",
    endTime: "Friday, 28 Mar 2025 23:30:00",
    location: "Meet at Hyde Park",
    image: "/images/events/all_the_stars.jpg",
    link: "https://www.facebook.com/events/1171496917957222"
  },
  {
    title: "Wheelchair Basketball Tournament",
    startTime: "Sunday, 13 Apr 2025 13:00:00",
    endTime: "Sunday, 13 Apr 2025 16:00:00",
    location: "UNSW Village Green (Multi-purpose caged courts near Sam Cracknell Pavilion)",
    image: "/images/events/wheelchair_basketball.jpg",
    link: "https://www.facebook.com/events/3852672894949394"
  }
];
